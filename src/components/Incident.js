import React from 'react'

import './styles/Incident.css'

import noImage from '../images/noImage.png'

class Incident extends React.Component {
    

    render() { 
        

        return (
            <div className="Incident container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            {this.props.image && (
                                <img 
                                    src={this.props.image.image_url || noImage} 
                                    alt={this.props.title}
                                    className="Incident__image"
                                />
                            )}
                            <div className="card-body">
                                <h5>{this.props.title}</h5>
                                <p>Date of the theft: {this.props.occurred_at}</p>
                                <p>Was reported on: {this.props.updated_at}</p>
                                <p>Place: {this.props.place}</p>
                                <p>Description:</p>
                                <p>{this.props.description}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Incident;