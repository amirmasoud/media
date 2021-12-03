<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    abort(500);
});

Route::get('login', function () {
    return Inertia::render('Auth/Login', [
        'github' => \Laravel\Socialite\Facades\Socialite::driver('github')->redirect()->getTargetUrl(),
        'google' => \Laravel\Socialite\Facades\Socialite::driver('google')->redirect()->getTargetUrl(),
    ]);
});

Route::get('auth/github/callback', function () {
    $githubUser = Socialite::driver('github')->user();

    $user = \App\Models\User::where('provider', \App\Enums\ProviderEnum::GITHUB->value)->where('provider_id', $githubUser->id)->first();


    if ($user) {
        $user->update([
            'provider_token' => $githubUser->token,
            'provider_refresh_token' => $githubUser->refreshToken,
        ]);
    } else {
        $user = \App\Models\User::create([
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'provider_id' => $githubUser->id,
            'provider_token' => $githubUser->token,
            'provider_refresh_token' => $githubUser->refreshToken,
        ]);
    }

    Auth::login($user);

    return redirect('/dashboard');
});

Route::get('auth/google/callback', function () {
    $googleUser = Socialite::driver('google')->user();

    $user = \App\Models\User::where('provider', \App\Enums\ProviderEnum::GOOGLE->value)->where('provider_id', $googleUser->id)->first();


    if ($user) {
        $user->update([
            'provider_token' => $googleUser->token,
            'provider_refresh_token' => $googleUser->refreshToken,
        ]);
    } else {
        $user = \App\Models\User::create([
            'name' => $googleUser->name,
            'email' => $googleUser->email,
            'provider' => \App\Enums\ProviderEnum::GOOGLE->value,
            'provider_id' => $googleUser->id,
            'provider_token' => $googleUser->token,
            'provider_refresh_token' => $googleUser->refreshToken,
        ]);
    }

    Auth::login($user);

    return redirect('/dashboard');
});

Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Home');
    });

    Route::get('/users', function () {
        $users = \App\Models\User::query()
            ->when(Request::input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
            ->paginate()
            ->withQueryString();

        return Inertia::render('Dashboard/Users/Index', [
            'users' => \App\Http\Resources\UserResource::collection($users),
            'filters' => Request::only('search'),
        ]);
    });

    Route::post('/users', function () {
        $validated = Validator::validate(Request::all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        \App\Models\User::create($validated);

        return redirect()->to('/dashboard/users');
    });

    Route::get('/users/create', function () {
        return Inertia::render('Dashboard/Users/Create');
    });

    Route::get('/settings', function () {
        return Inertia::render('Dashboard/Settings');
    });
});
