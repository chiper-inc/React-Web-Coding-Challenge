import { bikesApi } from "../api/bikesApi";

export const getBikes = async (query='', page=0) => {
    return await bikesApi.get(`/search?per_page=10&page=${page}&location=Berlin&query=${query}`);
}

export const getDetailsBike = async ({id=''}) => {
    return await bikesApi.get(`/bikes/${id}`);
}

export const getCountBikes =async ({query=''}) => {
    return await bikesApi.get(`/search/count?location=berlin&query=${query}`);
}
