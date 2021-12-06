<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

abstract class BasicCrudController extends Controller
{
    abstract public function index(Request $request);
    abstract public function create(Model $model, Request $request);
    abstract public function store(Model $model, Request $request);
    abstract public function edit(Model $model, Request $request);
    abstract public function update(Model $model, Request $request);
    abstract public function delete(Model $model, Request $request);
}
