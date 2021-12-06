<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

class SampleController extends BasicCrudController
{

    public function index(Request $request)
    {
        // TODO: Implement index() method.
    }

    public function create(User|Model $model, Request $request)
    {
        // TODO: Implement create() method.
    }

    public function store(User|Model $model, Request $request)
    {
        // TODO: Implement store() method.
    }

    public function edit(User|Model $model, Request $request)
    {
        // TODO: Implement edit() method.
    }

    public function update(User|Model $model, Request $request)
    {
        // TODO: Implement update() method.
    }

    public function delete(User|Model $model, Request $request)
    {
        // TODO: Implement delete() method.
    }
}
