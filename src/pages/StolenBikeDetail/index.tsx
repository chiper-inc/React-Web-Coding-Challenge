import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { imgSourceDefault } from "../../config/constants";
import { useBikeIndex } from "../../network/api/hooks/useBikeIndex";
import './styles.scss';

const StolenBikeDetail = () => {
  const { id } = useParams();
  const { bike, searchById } = useBikeIndex();

  useEffect(()=>{
    searchById(id!);
  }, [])
  
  return(
  <section className="StolenBikeDetail">
    {bike && (
      <>
        <h2>{bike.title}</h2>
        <h5>{bike.stolen_location}</h5>
        <img 
          alt={bike.title} 
          src={bike.thumb ? bike.thumb : imgSourceDefault} />
        <h2>DESCRIPTION OF INCIDENT</h2>
        <p>{bike.description}</p>
      </>
    )}
  </section>
)}

export default StolenBikeDetail;
