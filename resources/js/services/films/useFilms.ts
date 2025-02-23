import { useQuery } from "@tanstack/react-query";

import { fetchFilms, fetchFilm } from ".";
import { FilmsResponse, FilmResponse } from "./types";
import { AxiosError } from "axios";

export const useFilms = (title: string) => {
  return useQuery<FilmsResponse, AxiosError>({
    queryFn: () => fetchFilms(title),
    queryKey: ['fetchFilms', title],
    enabled: !!title,
  });
};

export const useFilm = (id: string) => {
  return useQuery<FilmResponse, AxiosError>({
    queryFn: () => fetchFilm(id),
    queryKey: ['fetchFilm', id],
    enabled: !!id,
  });
}
