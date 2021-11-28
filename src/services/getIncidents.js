import { API_URL } from "./settings";
import { paramsToString } from "../utils/paramsToString";

export const callApi = async (urlParams, options = {}) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = `${API_URL}?${urlParams}`;
  const response = await window.fetch(url, options);
  const data = await response.json();
  return data;
};

export const getIncidents = async ({
  page = 1,
  per_page = 10,
  keyword = "",
  occurred_before = "",
  occurred_after = "",
}) => {
  const urlParams = paramsToString([
    {
      key: "page",
      value: page,
    },
    {
      key: "per_page",
      value: per_page,
    },
    {
      key: "query",
      value: keyword,
    },
    {
      key: "occurred_before",
      value: occurred_before,
    },
    {
      key: "occurred_after",
      value: occurred_after,
    },
  ]);

  return callApi(urlParams);
};
