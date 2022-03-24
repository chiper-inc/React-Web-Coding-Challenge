import { BykeReducer } from "../redux/reducers/bykes";
import axios from "axios";
import { Byke } from "../components/BykeList";

const PATH_SEARCH = 'search';
const PATH_COUNT = 'count';

const apiUrl = process.env.REACT_APP_API_URL || '';

/**
 * @description it send request to a API  endpoint
 */
export const getApi = async (params?: any):Promise<BykeReducer> => {
  const requestBykes = axios.get(`${apiUrl}${PATH_SEARCH}`, { params });
  const countBykes = axios.get(`${apiUrl}${PATH_SEARCH}/${PATH_COUNT}`, { params });
  const [{ data: { bikes } }, { data }] = await Promise.all([requestBykes, countBykes]);
  return { data: [...bikes] as Byke[], total: data?.stolen } as BykeReducer;
};
