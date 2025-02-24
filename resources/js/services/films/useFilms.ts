import { useQuery } from "@tanstack/react-query";

import { fetchFilms, fetchFilm } from ".";
import { FilmsResponse, FilmResponse } from "./types";
import { AxiosError } from "axios";

import { useStarWarsStore } from "../../store/store";

export const useFilms = () => {
  const { searchTermFilms: title, isSearchingFilms } = useStarWarsStore();

  return useQuery<FilmsResponse, AxiosError>({
    queryFn: () => fetchFilms(title),
    queryKey: ['fetchFilms', title],
    enabled: isSearchingFilms && !!title,
  });
};

export const useFilm = () => {
  const id = useStarWarsStore((state) => state.selectedFilmId);

  return useQuery<FilmResponse, AxiosError>({
    queryFn: () => fetchFilm(id as string),
    queryKey: ['fetchFilm', id],
    enabled: !!id,
  });
}
