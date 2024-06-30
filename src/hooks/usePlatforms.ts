import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
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
