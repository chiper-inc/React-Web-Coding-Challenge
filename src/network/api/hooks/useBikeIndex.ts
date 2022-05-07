import { useState } from "react"
import useFetch from "use-http"
import { IBikeItemList } from "../../../components/BikeItemList/interface";
import { urlBase } from "../../../config/constants"

export const useBikeIndex = () => {
  const [stolenBikes, setStolenBikes] = useState<Array<IBikeItemList>>(null as any);
  const [bike, setBike] = useState<IBikeItemList>(null as any);
  const { get, response, loading, error } = useFetch(urlBase);

  const search = async () => {
    const result = await get('/search?per_page=10&stolenness=stolen');
    if(response.ok)setStolenBikes(result.bikes);
  }

  const searchById = async (id: string | undefined) => {
    const result = await get(`/bikes/${id}`);
    if(response.ok)setBike(result.bike);
  }
  
  return {
    stolenBikes,
    loading,
    error,
    initialSearch: search,
    searchById,
    bike
  }
}
