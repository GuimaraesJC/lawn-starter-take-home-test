import { useQuery } from "@tanstack/react-query";

import { fetchPeople } from ".";
import { PeopleResponse } from "./types";
import { AxiosError } from "axios";

export const usePeople = (name: string) => {
  return useQuery<PeopleResponse, AxiosError>({
    queryFn: () => fetchPeople(name),
    queryKey: ['fetchPeople', name],
    enabled: !!name,
  });
};
