import { useQuery } from "react-query";

async function fetchStolenBikes() {
  const response = await fetch(
    "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berl%C3%ADn&distance=10&stolenness=proximity"
  );
  if (!response.ok) {
    throw new Error("Failed to retrieve list of stolen bikes");
  }
  return response.json();
}

export default function useStolenBikes() {
  return useQuery("STOLENBIKES", fetchStolenBikes);
}
