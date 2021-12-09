import { useEffect, useState } from 'react';
import { searchBikeService } from './services/search-bike';
import BikeList from './components/BikeList';
import Search from './components/Search';
import { ISearchData } from './interfaces/Search';
import Header from './components/Header';
import Pagination from './components/Pagination';

function App() {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    service();
    console.log(bikes, currentPage, totalPage, hasError);
  }, [currentPage]);

  const service = async () => {
    const { data, error } = await searchBikeService({ page: currentPage });
    if (data) {
      setBikes(data.bikes);
      setCurrentPage(data.currentPage);
      setTotalPage(data.totalPages);
    }
    setHasError(error !== null);
  };

  const handlerSearch = (data: ISearchData) => {
    console.log('click', data);
  };

  const handlerCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <Search searchAction={handlerSearch} />
      <BikeList bikes={bikes} />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        limit={1}
        changePage={handlerCurrentPage}
      />
    </>
  );
}

export default App;
