<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StarWarsController;

Route::middleware('api')->group(function () {
    // People
    Route::get('/people', [StarWarsController::class, 'getPeople']);
    Route::get('/people/{id}', [StarWarsController::class, 'getPerson']);

    // Films
    Route::get('/films', [StarWarsController::class, 'getFilms']);
    Route::get('/films/{id}', [StarWarsController::class, 'getFilm']);
});
