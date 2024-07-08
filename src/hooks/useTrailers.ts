import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailor } from "../entities/Trailor";

export interface Data {
  480: string;
  max: string;
}

const useTrailors = (slug: string) => {
  const trailorService = new APIClient<Trailor>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: trailorService.getAll,
  });
};

export default useTrailors;
