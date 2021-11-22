import { useNavigate } from "react-router-dom";
import { useFormatDate } from "../../hooks/useFormatDate";
import Bike from "../../assets/images/bike.svg";
import { Wrapper, ContainerImg, ContainerInfo, Img, Row } from "./styles";

interface BikeDetailsProps {
  info: {
    id: number;
    thumb: string;
    title: string;
    description: string;
    date_stolen: number;
    stolen_location: string;
    frame_colors: string[];
    frame_material_slug: string;
    frame_model: string;
    frame_size: string;
    manufacturer_name: string;
    serial: string;
    type_of_cycle: string;
    year: number;
  }
}

export const BikeDetails = ({ info: {
  id,
  thumb,
  title,
  description,
  date_stolen,
  stolen_location,
  frame_colors,
  frame_material_slug,
  frame_model,
  frame_size,
  manufacturer_name,
  serial,
  type_of_cycle,
  year
}}: BikeDetailsProps) => {

  const navigate = useNavigate();
  const [date] = useFormatDate(date_stolen);

  const handleNavigate = () => navigate(`/case/${id}`);

  return (
    <Wrapper onClick={handleNavigate} >
      <ContainerImg>
        <Img src={thumb || Bike} alt={title} />
      </ContainerImg>
      <ContainerInfo>
        <span><b>Description of incident</b></span>
        <span>{description || 'No description.'}</span><br/>
        <Row>
          <span><b>Date Stolen:</b> {date || 'Unknown.'}</span>
          <span><b>Stolen Location:</b> {stolen_location || 'Unknown.'}</span>
        </Row>
        <Row>
          <span><b>Color(s):</b> {frame_colors.join(', ') || 'Unknown.'}</span>
          <span><b>Material:</b> {frame_material_slug || 'Unknown.'}</span>
        </Row>
        <Row>
          <span><b>Manufacturer:</b> {manufacturer_name || 'Unknown.'}</span>
          <span><b>Model:</b> {frame_model || 'Unknown.'}</span>
        </Row>
        <Row>
          <span><b>Serial:</b> {serial || 'Unknown.'}</span>
          <span><b>Size:</b> {frame_size?.toUpperCase() || 'Unknown.'}</span>
        </Row>
        <Row>
          <span><b>Type:</b> {type_of_cycle || 'Unknown.'}</span>
          <span><b>Year:</b> {year || 'Unknown.'}</span>
        </Row>
      </ContainerInfo>
    </Wrapper>
  );
};
