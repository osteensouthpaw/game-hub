import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Screenshot from "../entities/Screenshot";

const useScreenshots = (slug: string) => {
  const gameService = new APIClient<Screenshot>(`/games/${slug}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: gameService.getAll,
  });
};

export default useScreenshots;
