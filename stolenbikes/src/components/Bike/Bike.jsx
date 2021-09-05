import React from 'react';
import {Link} from 'react-router-dom';
import useDate from '../../hooks/useDate';

function Bike({
    title,
    id,
    date_stolen,
    serial,
    theftlocation,
    colors,
    picture }) {

    const { dateStolen } = useDate(date_stolen);

    return (
        <Link to={`/case/${id}`}>
            <div>
                <img src={picture} alt={title}></img>
                <h3>{title}</h3>
                <strong>Stolen: <span>{dateStolen}</span></strong>
                <strong>Location: <span>{theftlocation}</span></strong>
                <strong>Serial: <span>{serial}</span></strong>
                <strong>Colors: <span>{colors}</span></strong>
            </div>
        </Link>
    )
}

export default Bike
