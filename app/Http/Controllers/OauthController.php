<?php

namespace App\Http\Controllers;

use App\Enums\ProviderEnum;
use App\Http\Requests\CallbackProviderRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class OauthController extends Controller
{
    public string $redirectTo = '/dashboard';

    public function links(): \Inertia\Response
    {
        return Inertia::render('Auth/Login', [
            'github' => Socialite::driver('github')->redirect()->getTargetUrl(),
            'google' => Socialite::driver('google')->redirect()->getTargetUrl(),
        ]);
    }

    /**
     * @param  \App\Http\Requests\CallbackProviderRequest $request
     * @return \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function callback(CallbackProviderRequest $request): \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
    {
        return match (ProviderEnum::from($request->provider)) {
            ProviderEnum::GOOGLE => $this->googleCallback(),
            ProviderEnum::GITHUB => $this->gitHubCallback(),
            ProviderEnum::EMAIL => throw new Exception('To be implemented'),
            ProviderEnum::FACEBOOK => throw new Exception('To be implemented'),
        };
    }

    /**
     * @return \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
     */
    protected function gitHubCallback(): \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
    {
        $user = Socialite::driver('github')->user();

        $user = User::updateOrCreate([
            'provider' => ProviderEnum::GITHUB->value,
            'provider_id' => $user->id,
        ], [
            'name' => $user->name,
            'email' => $user->email,
            'provider_id' => $user->id,
            'provider_token' => $user->token,
            'provider_refresh_token' => $user->refreshToken ?? null,
        ]);

        Auth::login($user);

        return redirect($this->redirectTo);
    }

    protected function googleCallback(): \Illuminate\Routing\Redirector|\Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse
    {
        $user = Socialite::driver('google')->user();

        $user = User::updateOrCreate([
            'provider' => ProviderEnum::GOOGLE->value,
            'provider_id' => $user->id,
        ], [
            'name' => $user->name,
            'email' => $user->email,
            'provider_id' => $user->id,
            'provider_token' => $user->token,
            'provider_refresh_token' => $user->refreshToken ?? null,
        ]);

        Auth::login($user);

        return redirect($this->redirectTo);
    }

    protected function emailLogin(Request $request): \Illuminate\Http\RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function registerForm(Request $request)
    {
        return Inertia::render('Auth/Register');
    }

    public function emailRegister(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'password_confirmation' => 'required|password_confirmation',
            'name' => 'required|max:255',
        ]);

        dd($validated);
    }
}
