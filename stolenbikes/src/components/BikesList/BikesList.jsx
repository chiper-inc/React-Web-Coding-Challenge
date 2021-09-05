import React from 'react';
import Bike from '../Bike/Bike';

function BikesList({bikes}) {
    console.log(bikes)
    return (
        <>
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
        </>
    )
}

export default BikesList
