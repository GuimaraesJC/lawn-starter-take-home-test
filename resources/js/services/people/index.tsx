import api from '../api'
import { PeopleResponse, PersonResponse } from './types'

export const fetchPeople = async (name: string) => {
  const response = await api.get<PeopleResponse>('/people', {
    params: { name },
  })

  return response.data
}

export const fetchPerson = async (id: string) => {
  const response = await api.get<PersonResponse>(`/people/${id}`,)

  return response.data
}

