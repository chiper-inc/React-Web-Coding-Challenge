import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import useDate from '../../hooks/useDate';
import axios from 'axios';

function BikeDetail() {
    const { id } = useParams();
    const [bikeDetail, setBikeDetail] = useState();
    const { dateStolen, dateStolenReport } = useDate(
        bikeDetail?.stolen_record.date_stolen,
        bikeDetail?.stolen_record.created_at
      );

    useEffect(() => {
        axios.get(`https://bikeindex.org:443/api/v3/bikes/${id}`)
        .then(response => setBikeDetail(response.data.bike))
        .catch(error => {
            alert("Oops, we couldn't bring the detail, try again by refreshing the page!")
            console.log(error)
        })
    })
    return (
        <>
        {bikeDetail ? (
            <>
                <h2>{bikeDetail.title}</h2>
                <strong>Stolen <p>{bikeDetail.dateStolen}</p></strong>
                <img src={bikeDetail.public_images && (bikeDetail.public_images[0].medium)} alt={bikeDetail.frame_model} />
                <strong>Model: <span>{bikeDetail.frame_model}</span></strong>
                <strong>Location: <span>{bikeDetail.stolen_location}</span></strong>
                <strong>Serial: <span>{bikeDetail.serial}</span></strong>
                <strong>Year: <span>{bikeDetail.year}</span></strong>
                <strong>Type: <span>{bikeDetail.type_of_cycle}</span></strong>
                <strong>Colors: {bikeDetail.frame_colors}</strong>

                <strong>Reported: <p>{dateStolenReport}</p></strong>
                <strong>Description: <p>{bikeDetail.description}</p></strong>
            </>
            ):( <p>Loading...</p>)}
    </>
    )
}

export default BikeDetail
