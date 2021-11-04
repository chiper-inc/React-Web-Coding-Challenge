import { noFound } from '../../assets/images';
import './styles.scss';

const ErrorData = () => {
  return (
    <div className="error-data">
      <div className="content-img">
        <img src={noFound} alt="No found" />
      </div>
      <p className="text">Opps, something went wrong..</p>
    </div>
  );
};

export default ErrorData;
