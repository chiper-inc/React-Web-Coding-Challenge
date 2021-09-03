import React, {useEffect, useState} from 'react'
import axios from 'axios';
import BikesList from '../BikesList/BikesList'
import Filter from '../Filter/Filter'


function BikesCore() {
    const [allBikes, setAllBikes] = useState();
    const [bikesCount, setbikesCount] = useState();


    function getData (page = 1, keyword= '') {
        Promise.all([
                axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10&query=${keyword}&location=Berlin&distance=10&stolenness=proximity`),
                axios.get(`https://bikeindex.org:443/api/v3/search/count?query=${keyword}&location=Berlin&distance=10&stolenness=proximity`)
            ])
            .then(([{data: { bikes : allBikes}} , {data: { proximity : bikesCount}}]) => {
                    setAllBikes(allBikes);
                    setbikesCount(bikesCount);
                })
            .catch(error => alert(error))
            }
            useEffect(() => {
                getData()
            }, []);

            //funciones de filtrado

    //filteredBikes = filtrado(allbikes)

    return (
        <div>
            <Filter /> {/*Pasar funciones por props*/}
            <span>Total: {bikesCount}</span>
            {/*Filters contiene el ui pero ejecuta las funciones de BikesCore */}
            <BikesList bikes={allBikes}/>
        </div>
    )
}

export default BikesCore
