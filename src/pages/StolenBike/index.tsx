import { useEffect } from 'react';
import BikeItemList from '../../components/BikeItemList';
import FilterBar from '../../components/FilterBar';
import { StateMessage } from '../../components/StyledComponents/StateMessage';
import { useBikeIndex } from '../../network/api/hooks/useBikeIndex';

const StolenBike = () => {
  const { error, initialSearch, loading, stolenBikes } = useBikeIndex();

  useEffect(() => {
    initialSearch();
  }, [])

  return (
  <section>
    <FilterBar />
    {!error && !loading && stolenBikes?.map(bike => (
      <BikeItemList 
      description={bike.description}
      date_stolen={bike.date_stolen}
      id={bike.id}
      thumb={bike.thumb}
      stolen_location={bike.stolen_location}
      title={bike.title}
      key={bike.id} />
    ))}
    {loading  && <StateMessage color='#111'>Loading...</StateMessage>}
    {error  && <StateMessage color='#fff000'>Oops, something went wrong</StateMessage>}
  </section>
)}

export default StolenBike;
