import { BIKE_LIST, BIKE_SEARCH } from "../services/endpoint";

const config = (data, method = "GET") => ({
  method,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: method !== "GET" ? JSON.stringify(data) : null,
});

export const fetchListBikes = async () => {
  const resp = await fetch(BIKE_LIST, config);
  return resp.json();
};

export const fetchListBikesTotal = async () => {
  const resp = await fetch(
    `${BIKE_LIST}/count?location=berlin&distance=10&stolenness=proximity`,
    config
  );
  return resp.json();
};

export const fetchSearchBikes = async (bikeId) => {
  const resp = await fetch(`${BIKE_SEARCH}/${bikeId}`, config);
  return resp.json();
};
