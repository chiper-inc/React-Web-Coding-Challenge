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

  const getBikes = async () => {
    showLoading();
    const bikes = await getSearchBikes();
    const count = await getCountOcurrencesBikes();
    console.log(bikes);
    setBikesStolen(bikes.bikes);
    setCountStolen(count.stolen);
    hideLoading();
  };

  const handleSearch = async (filters: IFilters) => {
    const bikes = await getSearchBikes(filters);
    setBikesStolen(bikes);
  };

  React.useEffect(() => {
    getBikes();
  }, []);

  return (
    <>
      <PageHome
        onSearch={(params) => handleSearch(params)}
        bikesStolen={bikesStolen}
        countStolen={countStolen}
      />
    </>
  );
};

export default Home;
