import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../card/Card";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bikesPerPage] = useState(10);
  const [cases, setCase] = useState(0);

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=10&stolenness=proximity"
      );
      setBikes(data.bikes);
      setCase(data.bikes.length);
      setLoading(false);
    };
    fetchBikes();
  }, []);

  const indexOfLastBikes = currentPage * bikesPerPage;
  const indexOfFirstBikes = indexOfLastBikes - bikesPerPage;
  const currentBikes = bikes.slice(indexOfFirstBikes, indexOfLastBikes);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scroll(0, 0);
  };

  return (
    <div>
      <h4 style={{ paddingLeft: "7%", color: "#006dae" }}>
        Total Cases Found: {cases}
      </h4>
      {loading ? (
        <Loader />
      ) : (
        currentBikes?.map((b) => <Card key={b.id} {...b} />)
      )}
      <Pagination
        bikesPerPage={bikesPerPage}
        totalBikes={bikes.length}
        paginate={paginate}
      />
    </div>
  );
};
export default CardList;
