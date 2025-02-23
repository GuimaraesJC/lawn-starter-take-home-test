<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StarWarsController;

Route::middleware('api')->group(function () {
    Route::get('/people', [StarWarsController::class, 'getPeople']);
});
