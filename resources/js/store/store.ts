import { create } from "zustand";
import { PeopleResponse } from "../services/people/types";
import { FilmsResponse } from "../services/films/types";

interface StarWarsStore {
  searchTermPeople: string;
  searchTermFilms: string;
  peopleResults: PeopleResponse | null;
  filmsResults: FilmsResponse | null;
  isSearchingPeople: boolean;
  isSearchingFilms: boolean;
  selectedPersonId: string | null;
  selectedFilmId: string | null;

  setSearchTermPeople: (name: string) => void;
  setSearchTermFilms: (title: string) => void;
  setPeopleResults: (results: PeopleResponse | null) => void;
  setFilmsResults: (results: FilmsResponse | null) => void;
  setSelectedPersonId: (id: string | null) => void;
  setSelectedFilmId: (id: string | null) => void;
}

export const useStarWarsStore = create<StarWarsStore>((set) => ({
  searchTermPeople: "",
  searchTermFilms: "",
  peopleResults: null,
  filmsResults: null,
  isSearchingPeople: false,
  isSearchingFilms: false,
  selectedPersonId: null,
  selectedFilmId: null,

  setSearchTermPeople: (name) => set({ searchTermPeople: name }),
  setSearchTermFilms: (title) => set({ searchTermFilms: title }),
  setPeopleResults: (results) => set({ peopleResults: results }),
  setFilmsResults: (results) => set({ filmsResults: results }),
  setSelectedPersonId: (id) => set({ selectedPersonId: id }),
  setSelectedFilmId: (id) => set({ selectedFilmId: id }),
}));
