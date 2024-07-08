import { Data } from "../hooks/useTrailers";

export default interface Trailor {
  id: number;
  name: string;
  preview: string;
  data: Data;
}
