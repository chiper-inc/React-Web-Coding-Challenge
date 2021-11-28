import { useContext, useEffect } from "react";
import { getIncidents } from "../services/getIncidents";
import moment from "moment";
import IncidentsContext from "../context/IncidentsContext";

export const useGetIncidents = ({ page, per_page, keyword, dateTo, dateFrom }) => {
  const { loading, error, incidents, currentDate, setLoading, setError, setIncidents, setCurrentDate } =
    useContext(IncidentsContext);

  const params = {
    page: page,
    per_page: per_page,
    keyword: keyword,
    occurred_before: dateTo,
    occurred_after: dateFrom,
  };

  useEffect(() => {
    setError(null);
    setLoading(true);

    getIncidents(params)
      .then(({ bikes }) => {
        if (!bikes) {
          setError("Error");
        } else {
          setIncidents(bikes);
          setLoading(false);
        }
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, currentDate, setError, setIncidents]);

  const handleClickSearch = () => {
    setLoading(true);
    setCurrentDate(moment());
  };

  return {
    loading,
    error,
    incidents,
    handleClickSearch,
  };
};
