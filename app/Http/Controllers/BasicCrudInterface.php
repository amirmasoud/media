<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

interface BasicCrudInterface
{
    public function index(Request $request);
    public function create(Model $model, Request $request);
    public function store(Model $model, Request $request);
    public function edit(Model $model, Request $request);
    public function update(Model $model, Request $request);
    public function delete(Model $model, Request $request);
}
