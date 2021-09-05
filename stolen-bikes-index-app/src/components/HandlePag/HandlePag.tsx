import React from 'react';
import useHandlePagination from '../../hooks/useHandlePagination';

export default function HandlePag() {

  const {
    index, goLast, goFirst, nextPage, prevPage,
  } = useHandlePagination();
  return (
    <div>
      <span>{index}</span>
      <button type="button" onClick={prevPage}>back</button>
      <button type="button" onClick={nextPage}>next</button>
      <button type="button" onClick={goFirst}>first</button>
      <button type="button" onClick={goLast}>last</button>
    </div>
  );
}
