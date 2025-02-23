import api from '../api'
import { FilmsResponse, FilmResponse } from './types'

export const fetchFilms = async (title: string) => {
  const response = await api.get<FilmsResponse>('/films', {
    params: { title },
  })

  return response.data
}

export const fetchFilm = async (id: string) => {
  const response = await api.get<FilmResponse>(`/films/${id}`)

  return response.data
}
