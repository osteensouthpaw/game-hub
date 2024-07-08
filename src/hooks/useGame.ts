import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const gameService = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game>({
    queryKey: ["gameDetail", slug],
    queryFn: () => gameService.get(slug),
  });
};

export default useGame;
