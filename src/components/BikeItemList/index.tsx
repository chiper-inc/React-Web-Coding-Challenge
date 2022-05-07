import { Link } from "react-router-dom";
import { imgSourceDefault } from "../../config/constants";
import { IBikeItemList } from "./interface";
import './styles.scss';

const BikeItemList = ({ title, date_stolen, description, thumb, stolen_location, id } : IBikeItemList) => {
  return(
    <section className="BikeItemList">
      <img 
        alt={title} 
        src={thumb ? thumb : imgSourceDefault} />
      <div>
        <Link to={`/detail/${id}`}>{title}</Link>
        <p>{stolen_location}</p>
        <p>{description}</p>
        <p>{date_stolen}</p>
      </div>
    </section>
  )
}

export default BikeItemList;
