import { NoImage } from '../../assets/images';
import { BikeItemType } from '../../types/types';

import './style.scss';
interface BikeItemProps {
  bike: BikeItemType;
}

const BikeItem = ({ bike }: BikeItemProps) => {
  return (
    <div className="content-bike " key={bike.id}>
      <div className="content-img">
        <img src={!!bike?.thumb ? bike?.thumb : NoImage} alt={bike.title} />
      </div>
      <div className="content-info">
        <a className="title" href='/'>{bike.title}</a>
        <p className="description">
          {!!bike.description ? bike.description : 'No description'}
        </p>
        <p className="location">
          {!!bike.stolen_location ? bike.stolen_location : 'No location'}
        </p>
      </div>
    </div>
  );
};

export default BikeItem;
