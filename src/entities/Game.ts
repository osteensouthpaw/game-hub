import { Genre } from "./Genre";
import { Platform } from "./Platform";

interface Publisher {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
}
