import React from 'react';

import Incident from '../components/Incident'
import { Link } from 'react-router-dom'
import loading from '../images/loading.svg'

function IncidentDetails (props) {
    
    const incident = props.incident
    console.log(incident)
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
                            description={incident.description || 'description'}
                            ocurrred_at={incident.occured_at || 'ocurred_aat'}
                            place={incident.address || 'place'}
                            image={incident.media.image_url || ''} 
                        />
                   </div>
               </div>
           </div>
        </div>
    )
}

export default IncidentDetails