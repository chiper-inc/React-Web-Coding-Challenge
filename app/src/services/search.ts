import { IFilters } from '@/Interfaces';
import api from './api';

export async function getSearchBikes(
  filters: IFilters | null = null,
): Promise<any> {
  const res = await api.get(
    `/search?${
      filters && new URLSearchParams(JSON.stringify(filters)).toString()
    }`,
  );
  return res.data;
}

export async function getCountOcurrencesBikes(): Promise<any> {
  const res = await api.get(`/search/count`);
  return res.data;
}
