import camelcaseKeys from 'camelcase-keys';

interface ISearchBike {
  page?: number;
  perPage?: number;
  query?: string;
  location?: string;
  distance?: number;
  stolenness?: string;
}

export const searchBikeService = async ({
  page = 1, perPage = 10, location = 'Berlin', distance = 100, stolenness = 'proximity', query,
}: ISearchBike) => {
  try {
    const params = new URLSearchParams();
    params.append('page', String(page));
    params.append('per_page', String(perPage));
    params.append('location', location);
    params.append('distance', String(distance));
    params.append('stolenness', stolenness);

    if (query) {
      params.append('query', query);
    }

    const response = await fetch(`/v3/search?${params.toString()}`);

    const data = await response.json();
    const total = Number(response.headers.get('Total'));
    const totalPages = Math.ceil(total / perPage);
    const bikes = data.bikes.map((bike: any) => camelcaseKeys(bike));

    return { data: { bikes, totalPages, currentPage: page }, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
