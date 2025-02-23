import { useQuery } from "@tanstack/react-query";

import { fetchPeople, fetchPerson } from ".";
import { PeopleResponse, PersonResponse } from "./types";
import { AxiosError } from "axios";

export const usePeople = (name: string) => {
  return useQuery<PeopleResponse, AxiosError>({
    queryFn: () => fetchPeople(name),
    queryKey: ['fetchPeople', name],
    enabled: !!name,
  });
};

export const usePerson = (id: string) => {
  return useQuery<PersonResponse, AxiosError>({
    queryFn: () => fetchPerson(id),
    queryKey: ['fetchPerson', id],
    enabled: !!id,
  });
}
