import { useEffect, useState } from 'react';
import { PaginationType } from '../../types/types';
import './style.scss';

interface PaginationProps {
  page: PaginationType['page'];
  setPage: PaginationType['setPage'];
  totalPage: PaginationType['totalPage'];
}

const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  const [pagesNumbers, setPagesNumbers] = useState([]);

  const calcPages = () => {
    let arr = [];
    for (let i = 1; i <= totalPage; i++) {
      //@ts-ignore
      arr.push(i);
    }
    setPagesNumbers(arr);
  };

  useEffect(() => {
    calcPages();
  }, []);

  return (
    <div className="pagination flex">
      <button className="btn" onClick={() => setPage(1)}>
        First
      </button>
      <button
        className={page === 1 ? 'btn desactive' : 'btn'}
        onClick={() => setPage(page - 1)}
        disabled={page === 1 ? true : false}
      >
        Prev
      </button>
      {pagesNumbers.map((num: number) => {
        return (
          <div
            onClick={() => setPage(num)}
            className={page === num ? 'item-number active' : 'item-number'}
          >
            <p>{num}</p>
          </div>
        );
      })}
      <button
        className={page === totalPage ? 'btn desactive' : 'btn'}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage ? true : false}
      >
        Next
      </button>
      <button className="btn" onClick={() => setPage(totalPage)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
