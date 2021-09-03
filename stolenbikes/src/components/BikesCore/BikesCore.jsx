import React from 'react'
import axios from 'axios';
import BikesList from '../BikesList/BikesList'
import Filters from '../Filters/Filters'


function BikesCore() {
     // allbikes = axios
     //funciones de filtrado

    //filteredbikes = filtrado(allbikes)

    return (
        <div>
            <p>{allbikes.length}</p>
            {/*Filters contiene el ui pero ejecuta las funciones de BikesCore */}
            <Filters funcionesDeFiltrado={funcion,funcion,funcion,funcion}/>
            <BikesList bikes={bikes}/>
        </div>
    )
}

export default BikesCore
