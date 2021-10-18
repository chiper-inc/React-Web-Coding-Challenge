import { IFilters } from '@/Interfaces';
import api from './api';

export async function getSearchBikes(
  filters: IFilters | null = null,
  page: number,
  perPage: number,
): Promise<any> {
  const res = await api.get(
    `/search?page=${page}&per_page=${perPage}${
      filters
        ? `&${new URLSearchParams(filters as unknown as string).toString()}`
        : ``
    }`,
  );
  return res.data;
}

export async function getCountOcurrencesBikes(): Promise<any> {
  const res = await api.get(`/search/count`);
  return res.data;
}

export async function getBikeById(id: string): Promise<any> {
  const res = await api.get(`/bikes/${id}`);
  return res.data;
}
