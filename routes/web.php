<?php

use App\Http\Controllers\OauthController;
use App\UI\DashboardHeading\Button as DashboardHeadingButton;
use App\UI\DashboardHeading\Item as DashboardHeadingItem;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Auth routes
Route::middleware('guest')->group(function () {
    Route::get('login', [OauthController::class, 'loginForm'])->name('login');
    Route::post('login', [OauthController::class, 'loginWithEmail']);
    Route::get('register', [OauthController::class, 'registerWithEmailForm'])->name('register');
    Route::post('register', [OauthController::class, 'registerWithEmail']);
    Route::get('auth/{provider}/callback', [OauthController::class, 'callback']);
});
Route::post('logout', [OauthController::class, 'logout'])->middleware('auth')->name('logout');

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
            'table' => [
                'fields' => [
                    [
                        'name' => 'name',
                        'label' => 'name',
                    ],
                    [
                        'name' => 'email',
                        'label' => 'Email',
                    ],
                    [
                        'name' => 'email_verified_at',
                        'label' => 'email_verified_at',
                    ]
                ],
                'actions' => [
                    [
                        'name' => 'edit',
                        'label' => 'Edit',
                        'link' => '/dashboard/users/{user}/edit',
                    ],
                    [
                        'name' => 'delete',
                        'label' => 'Delete',
                        'link' => '/dashboard/users/{user}/delete',
                    ],
                ],
            ],
            'dashboardHeadings' => [
                'items' => DashboardHeadingItem::collection([
                    [
                        'link' => '/dashboard',
                        'label' => 'Dashboard',
                    ],
                    [
                        'link' => '/dashboard/users',
                        'label' => 'Users',
                    ],
                    [
                        'link' => '#',
                        'label' => 'List',
                    ],
                ]),
                'buttons' => DashboardHeadingButton::collection([
                    [
                        'link' => '/dashboard/users/create',
                        'label' => 'Create a New User',
                    ]
                ])
            ]
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

    Route::get('/users/edit/{user}', function () {
        return Inertia::render('Dashboard/Users/Edit');
    })->name('dashboard.users.edit');

    Route::get('/settings', function () {
        return Inertia::render('Dashboard/Settings');
    });
});
