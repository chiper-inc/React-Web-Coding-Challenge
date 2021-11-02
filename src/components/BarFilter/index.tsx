import { useState } from 'react';

const BarFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bar-filter mt-8 flex items-center">
      <div className="content-search mr-4 w-3/12">
        <input
          className="border border-black w-full p-1"
          placeholder="Search case descriptions"
        />
      </div>
      <div className="content-range-date"></div>
    </div>
  );
};

export default BarFilter;
