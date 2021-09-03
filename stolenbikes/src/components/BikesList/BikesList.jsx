import React from 'react';
import Bike from '../Bike/Bike';

function BikesList({bikes}) {
    console.log(bikes,"BikesList")
    return (
        <>
       { bikes.map((bike) => (
           <Bike
           key={bike.id}
           id= {bike.id}
           title={bike.title}
           description={bike.description}
           dateoftheft={bike.dateoftheft}
           dateofreport={bike.dateofreport}
           theftlocation={bike.theftlocation}
           picture={bike.thumb}
           />
       ))}
        </>
    )
}

export default BikesList
