import camelcaseKeys from 'camelcase-keys';

export const bikeByIdService = async (id: number) => {
  try {
    const response = await fetch(`/v3/bikes/${id}`);
    const data = await response.json();
    const bike = camelcaseKeys(data.bike, { deep: true });
    return { data: bike, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
