import React from "react";

function pagination({ casesPerPage, totalCasesCount,paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCasesCount / casesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="page-numbers">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={()=> paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default pagination;
