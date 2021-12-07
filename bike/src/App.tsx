import { useEffect, useState } from 'react';
import { searchBikeService } from './services/search-bike';
import BikeList from './components/BikeList';

function App() {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    service();
    console.log(bikes, currentPage, totalPage, hasError);
  }, []);

  const service = async () => {
    const { data, error } = await searchBikeService({});
    if (data) {
      setBikes(data.bikes);
      setCurrentPage(data.currentPage);
      setTotalPage(data.totalPages);
    }
    setHasError(error !== null);
  };

  return (
    <div className="App">
      <BikeList bikes={bikes} />
    </div>
  );
}

export default App;
