import React from 'react';
import Bike from '../Bike/Bike';
import { CardContainer } from './BikesList.styles';

function BikesList({bikes}) {
    return (
        <CardContainer>
            {Array.isArray(bikes) & bikes.length > 0 ? (
                bikes.map((bike) => (
                    <Bike
                        id={bike.id}
                        key={bike.id}
                        title={bike.title}
                        date_stolen={bike.date_stolen}
                        theftlocation={bike.stolen_location}
                        serial={bike.serial}
                        colors={bike.frame_colors}
                        picture={bike.thumb}
                    />
                ))
            ):(
                <p>No results</p>
            )}
        </CardContainer>
    )
}

export default BikesList
