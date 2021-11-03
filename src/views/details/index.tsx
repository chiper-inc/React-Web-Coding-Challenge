import { useParams } from 'react-router';
import { DetailsType } from '../../types/types';
interface DetailsProps {
  id: DetailsType['id'];
}
const Details = () => {
  const { id }: DetailsProps = useParams();
  console.log(id);
  return <div>Details {id}</div>;
};

export default Details;
