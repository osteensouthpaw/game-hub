import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs (one da
    initialData: {
      count: platforms.results.length,
      results: platforms.results,
    },
  });

  return { data, error, isLoading };
};
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
