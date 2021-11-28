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
        sleep(2);

        return Inertia::render('Dashboard/Home', [
            'users' => \App\Http\Resources\UserResource::collection(\App\Models\User::paginate()),
        ]);
    });

    Route::get('/users', function () {
        return Inertia::render('Dashboard/Users');
    });

    Route::get('/settings', function () {
        return Inertia::render('Dashboard/Settings');
    });
});
