<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StarWarsController;

Route::prefix('people')->group(function () {
  Route::get('/', [StarWarsController::class, 'getPeople'])->name('people.index');
  Route::get('/{id}', [StarWarsController::class, 'getPerson'])->name('people.show');
});

Route::prefix('films')->group(function () {
  Route::get('/', [StarWarsController::class, 'getFilms'])->name('films.index');
  Route::get('/{id}', [StarWarsController::class, 'getFilm'])->name('films.show');
});
