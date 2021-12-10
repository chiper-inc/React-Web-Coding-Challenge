import { IBike } from '../../interfaces/Bike';
import {
  BikeCardContent, ImageContent, InfoContent, InfoDate, InfoDescription, InfoTitle,
} from './styles';
import Image from '../Image';

interface IBikeProps {
    bike: IBike
}

const BikeCard = ({ bike }: IBikeProps) => {
  const formatDate = (dateStolen: number): string => (new Date(dateStolen * 1000)).toDateString();

  return (
    <BikeCardContent>
      <ImageContent>
        <Image src={bike.largeImg} alt={bike.title} />
      </ImageContent>
      <InfoContent>
        <InfoTitle to={`${bike.id}`}>{bike.title} {bike.frameColors.join(' ')}</InfoTitle>
        <InfoDescription>{bike.description || 'No Description'}</InfoDescription>
        <InfoDate>{formatDate(bike.dateStolen)}</InfoDate>
      </InfoContent>
    </BikeCardContent>
  );
};

export default BikeCard;
