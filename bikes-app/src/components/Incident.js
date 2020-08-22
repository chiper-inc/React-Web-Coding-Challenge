import React from 'react'

import './styles/Incident.css'

import noImage from '../images/noImage.png'

class Incident extends React.Component {
    render() { 
        return (
            <div className="Incident">
                <div className="Incident__section-name">
                    {this.props.image && (
                        <img src={this.props.image} alt={this.props.title}></img>
                    )}
                    {!this.props.image && (
                        <img src={noImage} alt="noImage"></img>
                    )}
                    <h1>{this.props.title}</h1>
                    <p>{this.props.ocurred_at}</p>
                </div>

                <div className="Incident__section-info">
                    <p>{this.props.place}</p>
                    <p>{this.props.description}</p>
                    
                </div>
                
            </div>
        )
    }
}
 
export default Incident;