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

Route::prefix('dashboard')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Home');
    });

    Route::get('/users', function () {
        $users = \App\Models\User::query()
            ->when(Request::input('search'), fn ($query, $search) => $query->where('name', 'LIKE', '%'.$search.'%'))
            ->paginate()
            ->withQueryString();

        return Inertia::render('Dashboard/Users', [
            'users' => \App\Http\Resources\UserResource::collection($users),
            'filters' => Request::only('search'),
        ]);
    });

    Route::get('/settings', function () {
        return Inertia::render('Dashboard/Settings');
    });
});
