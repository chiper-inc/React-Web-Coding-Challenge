import React from 'react';
import {Link} from 'react-router-dom';

function Bike({
    title,
    id,
    dateoftheft,
    serial,
    theftlocation,
    colors,
    picture}) {

    return (
        <Link to={`/case/${id}`}>
            <div>
                <img src={picture} alt={title}></img>
                <h3>{title}</h3>
                <strong>Stolen: <span>{dateoftheft}</span></strong>
                <strong>Location: <span>{theftlocation}</span></strong>
                <strong>Serial: <span>{serial}</span></strong>
                <strong>Colors: <span>{colors}</span></strong>
            </div>
        </Link>
    )
}

export default Bike
