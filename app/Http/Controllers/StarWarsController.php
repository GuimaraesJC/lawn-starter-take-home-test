<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class StarWarsController extends Controller
{
    public function getPeople(Request $request)
    {
        $name = $request->query('name');

        if (!$name) {
            return response()->json(['error' => 'Name parameter is required'], 400);
        }

        $response = Http::get('https://swapi.dev/api/people/', [
            'search' => $name
        ]);

        if ($response->successful()) {
            $data = $response->json();
            return response()->json($data['results'] ?? []);
        }

        return response()->json(['error' => 'Unable to fetch data'], 500);
    }
}
