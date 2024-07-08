import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Data {
    480: string;
    max: string;
}

interface Trailor {
  id: number;
  name: string;
  preview: string;
  data: Data;
}

const useTrailors = (slug: string) => {
  const trailorService = new APIClient<Trailor>(`/games/${slug}/movies`);
  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: trailorService.getAll,
  });
};

export default useTrailors;
