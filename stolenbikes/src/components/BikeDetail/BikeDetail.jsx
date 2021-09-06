import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import useDate from '../../hooks/useDate';
import axios from 'axios';
import { Date, DetailsContainer, FeaturesContainer, ImageContainer, IncidentContainer } from './BikeDetail.styles';
import ReactMapGL from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

function BikeDetail() {
    const API_KEY = 'pk.eyJ1IjoiaW1qb3NlaGlkYWxnbyIsImEiOiJja290MG43MXUwMGJlMndubnU1Zzl3Ym9rIn0.-dtkqxqBOu_WoWzExl5PCA';
    const { id } = useParams();
    const [bikeDetail, setBikeDetail] = useState();
    const { dateStolen, dateStolenReport } = useDate(
        bikeDetail?.stolen_record.date_stolen,
        bikeDetail?.stolen_record.created_at
      );
    console.log(bikeDetail,"bikeDetail")

    const query = window.matchMedia('(max-width: 768px)');
    const locationData = query.matches
    ? {
        width: window.innerWidth * 0.9,
        height: 400,
        latitude: bikeDetail?.stolen_record.latitude,
        longitude: bikeDetail?.stolen_record.longitude,
        zoom: 15
      }
    : {
        width: 477,
        height: 450,
        latitude: bikeDetail?.stolen_record.latitude,
        longitude: bikeDetail?.stolen_record.longitude,
        zoom: 15
      };

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://bikeindex.org:443/api/v3/bikes/${id}`)
        .then(response => setBikeDetail(response.data.bike))
        .catch(error => {
            alert("Oops, we couldn't bring the detail, try again by refreshing the page!")
            console.log(error)
        })
    },[])

    return (
        <>
        {bikeDetail ? (
            <DetailsContainer>
                <h2>{bikeDetail.title}</h2>
                <Date>
                    <strong>Stolen <p>{dateStolen}</p></strong>
                </Date>
                <ImageContainer>
                    <img src={bikeDetail.public_images.length && bikeDetail.public_images[0].medium || "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cycling_%28road%29_pictogram.svg/1024px-Cycling_%28road%29_pictogram.svg.png"} alt={bikeDetail.frame_model} />
                </ImageContainer>
                <FeaturesContainer>
                    <strong>Model: <span>{bikeDetail.frame_model}</span></strong>
                    <strong>Location: <span>{bikeDetail.stolen_location}</span></strong>
                    <strong>Serial: <span>{bikeDetail.serial}</span></strong>
                    <strong>Year: <span>{bikeDetail.year}</span></strong>
                    <strong>Type: <span>{bikeDetail.type_of_cycle}</span></strong>
                    <strong>Colors: {bikeDetail.frame_colors}</strong>
                </FeaturesContainer>
                <IncidentContainer>
                    <h2>Description</h2>
                    <Date>
                        Reported: <p>{dateStolenReport}</p>
                    </Date>
                    <p>{bikeDetail.stolen_record?.theft_description || 'Description not available'}</p>
                    <ImageContainer map>
                        <ReactMapGL width="100%" height="100%" mapboxApiAccessToken={API_KEY} {...locationData} />
                    </ImageContainer>
                </IncidentContainer>
            </DetailsContainer>
            ):( <p>Loading...</p>)}
    </>
    )
}

export default BikeDetail
