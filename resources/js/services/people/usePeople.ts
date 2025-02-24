import { useQuery } from "@tanstack/react-query";

import { fetchPeople, fetchPerson } from ".";
import { PeopleResponse, PersonResponse } from "./types";
import { AxiosError } from "axios";

import { useStarWarsStore } from "../../store/store";

export const usePeople = () => {
  const { searchTermPeople: name, isSearchingPeople } = useStarWarsStore();

  return useQuery<PeopleResponse, AxiosError>({
    queryFn: () => fetchPeople(name),
    queryKey: ['fetchPeople', name],
    enabled: isSearchingPeople && !!name,
  });
};

export const usePerson = () => {
  const id = useStarWarsStore((state) => state.selectedPersonId);

  return useQuery<PersonResponse, AxiosError>({
    queryFn: () => fetchPerson(id as string),
    queryKey: ['fetchPerson', id],
    enabled: !!id,
  });
}
