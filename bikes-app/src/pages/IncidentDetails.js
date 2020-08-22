import React from 'react';

import Incident from '../components/Incident'
import { Link } from 'react-router-dom'
import loading from '../images/loading.svg'

function IncidentDetails (props) {
    
    const incident = props.incident

    let time = new Date(incident.occurred_at * 1000)
    let day = (parseInt(time.getDay())<10 ? '0':'') + time.getDay()
    let month = (parseInt(time.getMonth())<10 ? '0':'') + time.getMonth()
    let year = time.getFullYear()
    const date = year + '/' + month + '/' + day
    
    time = new Date(incident.updated_at * 1000)
    day = (parseInt(time.getDay())<10 ? '0':'') + time.getDay()
    month = (parseInt(time.getMonth())<10 ? '0':'') + time.getMonth()
    year = time.getFullYear()
    const updated = year + '/' + month + '/' + day
    
    return (
        <div>
           <div className="container">
               {props.loading && (
                    <figure className="loadingState">
                        <img src={loading} alt="loading"/>
                    </figure>
               )}
               <div className="row">
                   <div className="col">
                        <Incident
                            title={incident.title || 'title'}
                            description={incident.description || 'no description'}
                            occurred_at={date || 'ocurred_at'}
                            updated_at={updated || 'updated_at'}
                            place={incident.address || 'place'}
                            image={incident.media || null} 
                        />
                   </div>
               </div>
           </div>
        </div>
    )
}

export default IncidentDetails