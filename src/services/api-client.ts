import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c3714d48e8b484c91f5680569edd48d",
  },
});
