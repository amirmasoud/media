<?php

use App\Http\Controllers\OauthController;
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

Route::get('login', [OauthController::class, 'links'])->name('login');
Route::post('login', [OauthController::class, 'emailLogin']);
Route::get('auth/{provider}/callback', [OauthController::class, 'callback']);

Route::prefix('dashboard')->middleware('auth')->group(function () {
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
