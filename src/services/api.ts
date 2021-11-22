const API_URL = 'https://bikeindex.org:443/api/v3';
const LOCATION = 'berlin';

export const fetchSearch = async (page: number = 1, perPage: number = 10) => {
	const resp = await fetch(
		`${API_URL}/search?page=${page}&per_page=${perPage}&location=${LOCATION}&stolenness=proximity`
	);
	return resp.json();
};

export const fetchSearchCount = async () => {
	const resp = await fetch(
		`${API_URL}/search/count?location=${LOCATION}&stolenness=proximity`
	);
	return resp.json();
};

export const fetchSearchById = async (id: number) => {
	const resp = await fetch(
		`${API_URL}/bikes/${id}`
	);
	return resp.json();
};
