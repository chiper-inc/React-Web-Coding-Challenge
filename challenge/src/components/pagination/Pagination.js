import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ bikesPerPage, totalBikes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBikes / bikesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                className="page-link"
                style={{ cursor: "pointer" }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  bikesPerPage: PropTypes.number,
  totalBikes: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
