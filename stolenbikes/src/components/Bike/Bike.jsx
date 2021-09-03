import React from 'react';
import BikeDetail from '../BikeDetail/BikeDetail';

function Bike({
    title,
    description,
    dateoftheft,
    dateofreport,
    theftlocation,
    picture}) {
    console.log(picture)
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{dateoftheft}</p>
            <p>{dateofreport}</p>
            <p>{theftlocation}</p>
            <img src={picture} alt={title}></img>
        </div>
    )
}

export default Bike
