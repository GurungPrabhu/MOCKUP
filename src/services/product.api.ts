import { IProduct } from "../interfaces";
import axios from "./axios";

const getProducts = (data: any): Promise<IProduct[]> => {
  const [, pageNo, count] = data.queryKey;
  return axios.get(`/beers?page=${pageNo}&per_page=${count}`);
};

export { getProducts };
