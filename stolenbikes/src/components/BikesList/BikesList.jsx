import React from 'react';
import Bike from '../Bike/Bike';

function BikesList(bikes) {
    return (
        <>
       { bikes.map((bike) => (
           <Bike
           title={bike.title}
           title={bike.title}
           title={bike.title}
           title={bike.title}
           title={bike.title}
           />
       ))}
        </>
    )
}

export default BikesList
