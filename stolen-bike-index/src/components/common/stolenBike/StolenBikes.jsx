import React, { useEffect, useState } from "react";
import styles from "./stolenBikes.module.css";
import StolenBike from "./StolenBike";
import { useStolenBikes, useFilterStolen } from "../../hooks";
import { filterBikes, filterForDate } from "./utils";
import { Loader } from "..";

const StolenBikes = ({ filter, setFilter }) => {
  const query = useStolenBikes();
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  let totBikes = 0;

  useEffect(() => {
    if (query.isSuccess) {
      setBikes(query.data.bikes);
    }
  }, [query.isFetching]);

  useEffect(() => {
    if (query.isSuccess) {
      filterForDate(filter, query.data, setBikes);
    }
  }, [filter, query.status]);

  useEffect(() => {
    if (filter.title.length) {
      filterBikes(filter, query, setBikes, bikes);
    } else if (query.isSuccess) {
      setBikes(query.data.bikes);
    }
  }, [filter.title.length]);

  const pagedBikes = () => {
    if (bikes.length) {
      return bikes.slice(currentPage, currentPage + 10);
    }
  };

  const nextPage = () => {
    if (bikes.length - currentPage > 10) {
      setPageNumber(pageNumber + 1);
      setCurrentPage(currentPage + 10);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setPageNumber(pageNumber - 1);
      setCurrentPage(currentPage - 10);
    }
  };

  const handleAllCases = () => {
    setFilter({
      title: "",
      dateFrom: "",
      dateTo: "",
      isFiltering: false,
      isEdit: false,
    });
  };

  if (query.isLoading) {
    return <Loader />;
  }
  if (query.isError) {
    return <div>Oooops, something went wrong</div>;
  }

  return (
    <>
      <div className={styles.totalCases}>
        <div className={styles.totalNumber}>
          <span>total: {`${bikes.length}`}</span>
        </div>
        <div className={styles.containerBtnAllCases}>
          <button onClick={handleAllCases} id={styles.btnAllCases}>
            All cases
          </button>
        </div>
      </div>

      <div className={styles.container}>
        {Array.isArray(pagedBikes())
          ? pagedBikes().map((stolen) => (
              <div className={styles.containerItem} key={stolen.id}>
                <StolenBike
                  id={stolen.id}
                  title={stolen.title}
                  description={stolen.description}
                  dateStolen={stolen.date_stolen}
                  stolenLocation={stolen.stolen_location}
                  bikeImage={stolen.thumb}
                />
              </div>
            ))
          : null}
      </div>
      <div className={styles.containerPager}>
        <div className={styles.containerBtnPrev}>
          <button onClick={previousPage} id={styles.btnPrev}>
            Prev
          </button>
        </div>
        &nbsp;
        <span>{pageNumber}</span>
        &nbsp;
        <div className={styles.containerBtnNext}>
          <button onClick={nextPage} id={styles.btnNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default StolenBikes;
