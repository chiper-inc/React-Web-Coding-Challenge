import React from 'react';
import { PageHome } from '@/components/Templates';
import useLoading from '@/contexts/Loading';
import { NextPage } from 'next';
import { getCountOcurrencesBikes, getSearchBikes } from '@/services/search';
import { IBikes, IFilters } from '@/Interfaces';

const Home: NextPage = () => {
  const { showLoading, hideLoading } = useLoading();
  const [bikesStolen, setBikesStolen] = React.useState<IBikes[]>([]);
  const [countStolen, setCountStolen] = React.useState<number>(0);

  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [perPage, setPerPage] = React.useState<number>(10);
  const [filters, setFilters] = React.useState<IFilters>();

  const getBikes = async () => {
    showLoading();
    const bikes = await getSearchBikes(filters, currentPage, perPage);
    setBikesStolen(bikes.bikes);
    if (!countStolen) {
      const count = await getCountOcurrencesBikes();
      setCountStolen(count.stolen);
    }
    hideLoading();
  };

  const handleSearch = async (
    filters: IFilters,
    page: number,
    perPage: number,
  ) => {
    showLoading();
    setCurrentPage(page);
    setPerPage(perPage);
    setFilters(filters);
    const res = await getSearchBikes(filters, page, perPage);
    setBikesStolen(res.bikes);
    hideLoading();
  };

  React.useEffect(() => {
    getBikes();
  }, []);

  return (
    <>
      <PageHome
        onSearch={(params) => handleSearch(params, currentPage, perPage)}
        bikesStolen={bikesStolen}
        countStolen={countStolen}
        currentPage={currentPage}
        totalPage={Math.round(countStolen / perPage)}
        handlePaginate={(num) =>
          handleSearch(filters as IFilters, num, perPage)
        }
      />
    </>
  );
};

export default Home;
