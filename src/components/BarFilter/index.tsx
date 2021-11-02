import { useState } from 'react';
import './style.scss';

const BarFilter = () => {
  return (
    <div className="bar-filter">
      <div className="content-search w-full md:w-3/12">
        <input
          className="input-search"
          placeholder="Search case descriptions"
        />
      </div>
      <div className="content-range-date"></div>
    </div>
  );
};

export default BarFilter;
