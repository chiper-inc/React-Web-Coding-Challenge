import { IFilters } from '@/Interfaces';
import api from './api';

const PER_PAGE = 10;

export async function getSearchBikes(
  filters: IFilters | null = null,
): Promise<any> {
  const res = await api.get(
    `/search?per_page=${PER_PAGE}&${
      filters && new URLSearchParams(JSON.stringify(filters)).toString()
    }`,
  );
  return res.data;
}

export async function getCountOcurrencesBikes(): Promise<any> {
  const res = await api.get(`/search/count`);
  return res.data;
}
