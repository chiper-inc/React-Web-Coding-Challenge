import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';

    function RenderIncident({incident}) {
        if (incident != null) {
            return (
                <div className="col-12 col-sm-5">   
                            <Card>
                                <CardImg top src={incident.media.image_url} alt={incident.title} />
                                <CardBody>
                                    <CardTitle>{incident.title}</CardTitle>
                                    <CardText>{incident.description}</CardText>
                                </CardBody>
                            </Card>   
                </div>
                   
                
            )
        }
        else {
            return (<div></div>)
        }
    }

    const  IncidentDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
    
    
        else if (props.incident != null) {
            return (
                <div className="container">
                <div className="row">
                </div>    
                <div className="col-12">
                    <h3>{props.incident.title}</h3>
                    <hr/>
                </div>                
                <div className="row">    
                    <RenderIncident incident={props.incident} />
                    
                </div>
            </div>
        ); }

      
        else if(props.incident == null) {
            return (<div></div>)
        }
        
    
          
    }
export default IncidentDetail;