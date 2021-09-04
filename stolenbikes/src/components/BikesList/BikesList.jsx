import React from 'react';
import Bike from '../Bike/Bike';

function BikesList({bikes}) {
    return (
        <>
       {Array.isArray(bikes) ? (
           bikes.map((bike) => (
            <Bike
                id={bike.id}
                key={bike.id}
                title={bike.title}
                dateoftheft={bike.date_stolen}
                theftlocation={bike.stolen_location}
                serial={bike.serial}
                colors={bike.frame_colors}
                picture={bike.thumb}
            />
         ))
       ):(
        <p>Loading ...</p>
       )}
        </>
    )
}

export default BikesList
