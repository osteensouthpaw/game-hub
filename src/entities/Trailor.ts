import { Data } from "../hooks/useTrailers";

export default interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: Data;
}
