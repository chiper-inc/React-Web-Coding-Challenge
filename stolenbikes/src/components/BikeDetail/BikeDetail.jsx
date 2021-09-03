import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function BikeDetail() {
    const { id } = useParams();
    const [bikeDetail, setbikeDetail] = useState();

    useEffect(() => {
        axios.get(`https://bikeindex.org:443/api/v3/bikes/${id}`)
        .then(response => console.log(response,"response detail"))
    })
    return (
        <div>
                Hola soy la bicicleta
        </div>
    )
}

export default BikeDetail
