import { useEffect } from 'react';
import BikeItemList from '../../components/BikeItemList';
import FilterBar from '../../components/FilterBar';
import Pagination from '../../components/Pagination';
import { StateMessage } from '../../components/StyledComponents/StateMessage';
import { TotalMessage } from '../../components/StyledComponents/TotalMessage';
import { useBikeIndex } from '../../network/api/hooks/useBikeIndex';
import { convertDate } from '../../utils/utils';

const StolenBike = () => {
  const { error, initialSearch, loading, stolenBikes, stolen, pages, currentPage } = useBikeIndex();

  useEffect(() => {
    initialSearch();
  }, [])

  return (
  <section>
    <FilterBar />
    <TotalMessage>Total: {stolen}</TotalMessage>
    {!error && !loading && stolenBikes?.map(bike => (
      <BikeItemList 
      description={bike.description}
      date_stolen={convertDate(bike.date_stolen!).toString()}
      id={bike.id}
      thumb={bike.thumb}
      stolen_location={bike.stolen_location}
      title={bike.title}
      key={bike.id} />
    ))}
    {loading  && <StateMessage color='#111'>Loading...</StateMessage>}
    {error  && <StateMessage color='#ff0000'>Oops, something went wrong</StateMessage>}
    {!loading && pages > 0 && <Pagination onSubmit={initialSearch} currentPage={currentPage} pages={pages} />}
  </section>
)}

export default StolenBike;
