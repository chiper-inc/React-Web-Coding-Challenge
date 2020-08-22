import React from 'react';
import { Link } from 'react-router-dom'

import './styles/IncidentsList.css'

import noImage from '../images/noImage.png'
import noResults from '../images/noResults.png'

function useSearchIncidents(incidents) {
    const [query, setQuery] = React.useState('')
    const [filteredIncidents, setFilteredIncidents] = React.useState(incidents)
    console.log(incidents)
    React.useMemo(() => {
        const result = incidents.filter(incident => {
            return incident.title.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredIncidents(result)
    }, [incidents, query])

    return {query, setQuery, filteredIncidents}
}

function IncidentsList(props) {
    const incidents = props.incidents
    console.log(incidents)
    const {query, setQuery, filteredIncidents} = useSearchIncidents(incidents)

    if (filteredIncidents === 0){
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="titleFilter">Filter Results By Title</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <h3>No incidents were found</h3>                    
                </div>
            </div>           
        )
    }
    return (
        <div>
            {filteredIncidents.length > 0 && (
                <div className="form-group">
                    <label htmlFor="filterByTitle" >Filter Incidents</label>
                    <input
                        id="filterByTitle" 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value)
                        }}
                    />
                </div> 
            )}
            <ul className="list-unstyled">
                {filteredIncidents.length === 0 && (
                    <div className="">
                        <figure>
                            <img className="rounded mx-auto" src={noResults} alt="noResults"/>
                        </figure>
                    </div>
                )}
                {filteredIncidents.map((incident) => {
                    return (
                        <li key={incident.id} className="IncidentListItem">
                            {incident.media.image_url && (
                                <img
                                    src={incident.media.image_url} 
                                    alt={incident.title}
                                    className="IncidentListItem__image"
                                />
                            )}
                            {!incident.media.image_url && (
                                <img
                                    src={noImage} 
                                    alt={incident.title}
                                    className="IncidentListItem__image"
                                />
                            )}
                            <div>
                                <Link className="LinkTo" to={`/incidents/${incident.id}`}>
                                    <strong>
                                        {incident.title} 
                                    </strong>
                                </Link>
                                <br/>{incident.occurred_at}   
                                <br/>{incident.address}
                                {incident.type}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>     
    )
}

export default IncidentsList