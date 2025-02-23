<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StarWarsController;

Route::middleware('api')->group(function () {
    // People
    Route::get('/people', [StarWarsController::class, 'getPeople']);

    // Films
    Route::get('/films', [StarWarsController::class, 'getMovies']);
});
