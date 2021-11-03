import { useState } from 'react';
import { BarFilterType } from '../../types/types';
import './style.scss';
interface BarFilterProps {
  setTitleSearch: BarFilterType['setTitleSearch'];
  titleSearch: BarFilterType['titleSearch'];
}

const BarFilter = ({ titleSearch, setTitleSearch }: BarFilterProps) => {
  return (
    <div className="bar-filter">
      <div className="content-search w-full md:w-3/12">
        <input
          className="input-search"
          placeholder="Search case descriptions"
          value={titleSearch}
          onChange={(e) => setTitleSearch(e.target.value)}
        />
      </div>
      <div className="content-range-date"></div>
    </div>
  );
};

export default BarFilter;
