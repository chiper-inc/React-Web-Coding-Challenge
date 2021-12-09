import { useEffect, useState } from 'react';
import { searchBikeService } from './services/search-bike';
import BikeList from './components/BikeList';
import Search from './components/Search';
import { ISearchData } from './interfaces/Search';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Empty from './components/Empty';
import Error from './components/Error';

function App() {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
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
  };

  const handlerSearch = (data: ISearchData) => {
    setQuery(data.query);
  };

  const handlerCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <Search searchAction={handlerSearch} />
      {isEmpty && <Empty />}
      {hasError && <Error />}
      {(!isEmpty && !hasError) && (
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
}

export default App;
