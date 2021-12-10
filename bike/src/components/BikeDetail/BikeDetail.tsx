import { IBike } from '../../interfaces/Bike';
import Image from '../Image';
import { BikeDetailContainer } from './styles';

interface IBikeDetailProps {
  bike: IBike | null
}

const BikeDetail = ({ bike }: IBikeDetailProps) => (
  <BikeDetailContainer>
    <div className="title">{bike?.title}</div>
    <div className="description">{bike?.stolenRecord.theftDescription}</div>
    <Image className="image" src={bike?.largeImg} alt={bike?.title} />
  </BikeDetailContainer>
);

export default BikeDetail;
