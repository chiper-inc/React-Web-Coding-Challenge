import React from 'react'

import './styles/Incident.css'

import noImage from '../images/noImage.png'

class Incident extends React.Component {
    
    render() { 

        return (
            <div className="Incident">
                <div className="Incident__section-name">
                    {this.props.image && (
                        <img 
                            src={this.props.image.image_url || noImage} 
                            alt={this.props.title}
                            className="Incident__image"
                        />
                    )}
                    <h1>{this.props.title}</h1>
                    <p>Date:{this.props.occurred_at}</p>
                </div>

                <div className="Incident__section-info">
                    <p>Place: {this.props.place}</p>
                    <p>Description:</p>
                    <p>{this.props.description}</p>
                    
                </div>
                
            </div>
        )
    }
}
 
export default Incident;