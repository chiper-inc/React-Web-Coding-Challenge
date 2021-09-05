import { useSelector } from 'react-redux';
import { SimpleStolenBikes } from '../interfaces/SimpleStolenBikesInterface';
import { State } from '../redux/reducer';

export const useFilter = () => {

  const allItems = useSelector(({ stolenBikes }:State) => stolenBikes);

  const filterByTitle = (title:string):SimpleStolenBikes[] => (allItems.filter(
    (bike) => bike.title.includes(title),
  ));

  return {
    filterByTitle,
  };
};

export default useFilter;
