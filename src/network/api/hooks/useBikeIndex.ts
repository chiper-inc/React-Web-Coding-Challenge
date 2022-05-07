import { useState } from "react"
import useFetch, { CachePolicies } from "use-http"
import { IBikeItemList } from "../../../components/BikeItemList/interface";
import { urlBase } from "../../../config/constants"

export const useBikeIndex = () => {
  const [stolenBikes, setStolenBikes] = useState<Array<IBikeItemList>>(null as any);
  const [bike, setBike] = useState<IBikeItemList>(null as any);
  const [stolen, setStolen] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { get, response, loading, error } = useFetch(urlBase, { cachePolicy: CachePolicies.NO_CACHE });

  const search = async (page: number = 1) => {
    setStolenBikes([]);
    const result = await get(`/search?per_page=10&stolenness=stolen&page=${page}`);
    if(response.ok){
      setCurrentPage(page);
      setStolenBikes(result.bikes);
      searchCount();
    }
  }

  const searchById = async (id: string) => {
    const result = await get(`/bikes/${id}`);
    if(response.ok)setBike(result.bike);
  }
  
  const searchCount = async () => {
    const result = await get(`search/count?stolenness=stolen`);
    if(response.ok){
      const { stolen } = result;
      setStolen(stolen);
      setPages(stolen / 10 | 0)
    }
  }

  return {
    stolenBikes,
    loading,
    error,
    initialSearch: search,
    searchById,
    bike,
    stolen, 
    pages,
    currentPage,
    setCurrentPage
  }
}
