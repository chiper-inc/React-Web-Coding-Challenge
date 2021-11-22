import { useNavigate } from "react-router-dom";
import { useFormatDate } from "../../hooks/useFormatDate";
import bike from "../../assets/images/bike.svg";
import { Wrapper, ContainerInfo, ContainerImg, Description } from "./styles";

interface IBikeItemProps {
  id: number;
  thumb: string;
  title: string;
  description: string;
  date_stolen: number;
  stolen_location: string;
}

export const BikeItem = ({
  id, thumb, title, description, date_stolen, stolen_location
}: IBikeItemProps) => {

  const navigate = useNavigate();
  const [date] = useFormatDate(date_stolen);

  const handleNavigate = () => navigate(`/case/${id}`);

  return (
    <Wrapper onClick={handleNavigate} >
      <ContainerImg>
        <img className="bike-img" src={thumb || bike} alt={title} />
      </ContainerImg>
      <ContainerInfo>
        <span><b>Title:</b> {title || 'No title'}</span>
        <Description><b>Description:</b> {description || 'No description'}</Description>
        <span><b>Date Stolen:</b> {date || 'Unknown'}</span>
        <span><b>Stolen Location:</b> {stolen_location || 'Unknown'}</span>
      </ContainerInfo>
    </Wrapper>
  );
};
