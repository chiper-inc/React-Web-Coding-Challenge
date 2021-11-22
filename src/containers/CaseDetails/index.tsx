import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSearchById } from "../../services/api";
import { BikeDetails } from "../../components/BikeDetails";
import { Title } from "../../components/Title";
import { Loading } from "../../components/Loading";

export const CaseDetails = () => {
  let { id } = useParams();

  const { isLoading, error, data } = useQuery(["bike", id], () =>
    fetchSearchById(Number(id))
  );

  if (isLoading) return <Loading />;

  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      <Title text={data.bike.title}/>
      <BikeDetails info={data.bike} />
    </div>
  );
};
