<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;

abstract class BasicCrudController extends Controller implements BasicCrudInterface
{
    protected function beforeIndex()
    {
        // Maybe validations and filters
    }

    protected function afterIndex()
    {
        // Maybe return and stuff
    }

    protected function processingIndex()
    {

    }

    public function index(Request $request)
    {
        $this->beforeIndex();

        $this->processingIndex();

        $this->afterIndex();
    }

    abstract public function create(Model $model, Request $request);
    abstract public function store(Model $model, Request $request);
    abstract public function edit(Model $model, Request $request);
    abstract public function update(Model $model, Request $request);
    abstract public function delete(Model $model, Request $request);
}
