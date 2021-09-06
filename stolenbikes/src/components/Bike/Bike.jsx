import React from 'react';
import {Link} from 'react-router-dom';
import useDate from '../../hooks/useDate';
import { Card, DetailsContainer, TextContainer } from './Bike.styles';

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
        <Card>
            <Link to={`/case/${id}`}>
                    <img src={picture || "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cycling_%28road%29_pictogram.svg/1024px-Cycling_%28road%29_pictogram.svg.png"} width="300" height="300" alt={title}></img>
            </Link>
                <TextContainer>
                    <h3>{title}</h3>
                    <DetailsContainer>
                        <strong>Stolen: <span>{dateStolen}</span></strong>
                        <strong>Location: <span>{theftlocation}</span></strong>
                        <strong>Serial: <span>{serial}</span></strong>
                        <strong>Colors: <span>{colors}</span></strong>
                    </DetailsContainer>
                </TextContainer>
        </Card>
    )
}

export default Bike
