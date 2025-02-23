import api from '../api'
import { PeopleResponse } from './types'

export const fetchPeople = async (name: string) => {
  const response = await api.get<PeopleResponse>('/people', {
    params: { name },
  })

  return response.data
}
