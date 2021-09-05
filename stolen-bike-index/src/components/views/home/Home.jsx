import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import StolenBikes from "../../common/stolenBike/StolenBikes";
import { SearchBar } from "../../common";

const Home = () => {
  const [filter, setFilter] = useState({
    title: "",
    dateFrom: "",
    dateTo: "",
    isFiltering: false,
    isEdit: false,
  });

  useEffect(() => {
    if (filter.isEdit) {
      setFilter((old) => ({ ...old, isFiltering: false }));
    }
  }, [filter.isEdit]);

  return (
    <div className={styles.container}>
      <SearchBar filter={filter} setFilter={setFilter} />
      <StolenBikes filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default Home;
