import { noFound } from '../../assets/images';
import './styles.scss';

const EmptyResult = () => {
  return (
    <div className="error-data">
      <div className="content-img">
        <img src={noFound} alt="No found" />
      </div>
      <p className="text">No results...</p>
    </div>
  );
};

export default EmptyResult;
