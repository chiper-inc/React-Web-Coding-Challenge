import React, { useEffect, useState } from "react";
import CardList from "../components/cardlist/CardList";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/search/Search";
import axios from "axios";
import NoResults from "../components/noresults/NoResults";

const Home = () => {
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
    <>
      <Search setBikes={setBikes} setCase={setCase} setLoading={setLoading} />
      <CardList loading={loading} cases={cases} currentBikes={currentBikes} />
      {bikes.length < 1 && <NoResults />}
      <Pagination
        bikesPerPage={bikesPerPage}
        totalBikes={bikes.length}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
