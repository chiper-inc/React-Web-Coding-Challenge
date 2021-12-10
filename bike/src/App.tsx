import { useEffect, useState } from 'react';
import { searchBikeService } from './services/search-bike';
import BikeList from './components/BikeList';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Empty from './components/Empty';
import Error from './components/Error';
import { ISearchData } from './interfaces/Search';

const App = () => {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    service();
  }, [currentPage, query]);

  const service = async () => {
    const { data, error } = await searchBikeService({ page: currentPage, query });
    if (data) {
      setBikes(data.bikes);
      setCurrentPage(data.currentPage);
      setTotalPage(data.totalPages);
      setIsEmpty(data.bikes.length === 0);
    }
    setHasError(error !== null);
    setIsLoading(false);
  };

  const handlerSearch = (data: ISearchData) => {
    setQuery(data.query);
  };

  const handlerCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Search searchAction={handlerSearch} />
      {isEmpty && <Empty />}
      {hasError && <Error />}
      {isLoading && <div>Loading...</div>}
      {(!isEmpty && !hasError && !isLoading) && (
        <>
          <BikeList bikes={bikes} />
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            limit={1}
            changePage={handlerCurrentPage}
          />
        </>
      )}
    </>
  );
};

export default App;
