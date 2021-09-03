import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";


function Filter({FilterFunctions}) { //destructuring de funciones que me vienen de BikesList
    return (
        <div>
            <input type='text' name="keyword" value={keyword} placeholder="Search case descriptions"/>
        </div>
    )
}

export default Filter
