<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\StarWarsService;

class StarWarsController extends Controller
{
  protected StarWarsService $starWarsService;

  public function __construct(StarWarsService $starWarsService)
  {
    $this->starWarsService = $starWarsService;
  }

  public function getPeople(Request $request)
  {
    $name = $request->query('name');

    if (!$name) {
      return response()->json(['error' => 'Name parameter is required'], 400);
    }

    $data = $this->starWarsService->fetchPeople($name);

    return $data
      ? response()->json($data['results'] ?? [])
      : response()->json(['error' => 'Unable to fetch data'], 500);
  }

  public function getPerson(int $id)
  {
    $data = $this->starWarsService->fetchPerson($id);

    return $data
      ? response()->json($data)
      : response()->json(['error' => 'Unable to fetch data'], 500);
  }

  public function getFilms(Request $request)
  {
    $title = $request->query('title');

    if (!$title) {
      return response()->json(['error' => 'Title parameter is required'], 400);
    }

    $data = $this->starWarsService->fetchFilms($title);

    return $data
      ? response()->json($data['results'] ?? [])
      : response()->json(['error' => 'Unable to fetch data'], 500);
  }

  public function getFilm(int $id)
  {
    $data = $this->starWarsService->fetchFilm($id);

    return $data
      ? response()->json($data)
      : response()->json(['error' => 'Unable to fetch data'], 500);
  }
}
