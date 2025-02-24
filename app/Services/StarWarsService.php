<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class StarWarsService
{
  protected string $baseUrl = 'https://swapi.dev/api/';

  public function fetchPeople(string $name)
  {
    return $this->fetchData('people', ['search' => $name]);
  }

  public function fetchPerson(int $id)
  {
    return $this->fetchData("people/{$id}");
  }

  public function fetchFilms(string $title)
  {
    return $this->fetchData('films', ['search' => $title]);
  }

  public function fetchFilm(int $id)
  {
    return $this->fetchData("films/{$id}");
  }

  private function fetchData(string $endpoint, array $params = [])
  {
    $response = Http::get($this->baseUrl . $endpoint, $params);

    if ($response->failed()) {
      return null;
    }

    return $response->json();
  }
}
