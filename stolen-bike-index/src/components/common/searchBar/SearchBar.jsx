import React, { useState } from "react";
import styles from "./searchBar.module.css";

const SearchBar = ({ filter, setFilter }) => {
  const [input, setInput] = useState("");

  const searchConfirm = (e) => {
    e.preventDefault();
    setFilter({
      ...filter,
      ["title"]: input,
      ["isFiltering"]: false,
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!filter.dateFrom) {
      return alert("Please, enter date from.");
    }
    if (!filter.dateTo) {
      return alert("Please, enter date to.");
    }
    setFilter({
      ...filter,
      ["isFiltering"]: true,
      ["isEdit"]: false,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerInput}>
        <div className={styles.input}>
          <input
            type="text"
            value={input}
            onChange={(e) => handleChange(e)}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={styles.containerBtnSearch}>
        <button id={styles.btnSearch} onClick={(e) => searchConfirm(e)}>
          Search
        </button>
      </div>

      <div className={styles.containerDate}>
        <div className={styles.containerForm}>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.containerDateFrom}>
              <label>From</label>
              <input
                type="date"
                value={filter.dateFrom}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    ["dateFrom"]: e.target.value,
                    ["isEdit"]: true,
                  })
                }
              />
            </div>
            <div className={styles.containerDateTo}>
              <label>To</label>
              <input
                type="date"
                value={filter.dateTo}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    ["dateTo"]: e.target.value,
                    ["isEdit"]: true,
                  })
                }
              />
            </div>
            <div className={styles.containerBtnFindDate}>
              <button type="submit">Find cases</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
