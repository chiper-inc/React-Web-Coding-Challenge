import { IBike } from '../../interfaces/Bike';
import { BikeListContent } from './styles';
import BikeCard from '../BikeCard';

interface IBikeListProps {
    bikes: IBike[]
}

const BikeList = ({ bikes }: IBikeListProps) => (
  <BikeListContent>
    {bikes.map((bike) => <BikeCard key={bike.id} bike={bike} />)}
  </BikeListContent>
);

export default BikeList;
