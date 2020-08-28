import React,{Component} from 'react';
import { Loading } from './LoadingComponent';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


   class IncidentDetail extends Component  {
      constructor(props){
          super(props);
      }
      render(){

      
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="col-5 ">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                    <h4 className="red">{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
    
    
        else if (this.props.incident != null) {
            return (
              
              
                <div className="container">
               <div className="row-content"> 
                <div className="col-9 m-auto">
                
                    <div className="col-12 col-md-10">
                        <h3 className="mt-5 ">{this.props.incident.title}</h3> 
                        <p 
                        >{new Date((this.props.incident.occurred_at)*1000).toDateString()} - {this.props.incident.address}</p>
                    </div>
                    <div id="map" className=" col-12 col-md-10 " >
                        <Map 
                            google={this.props.google}
                            zoom={14}                          
                            initialCenter={{
                            lat:  52.5186,
                            lng:  13.4081
                            }}
                            >
                            <Marker position={{ 
                            lat:  3.426394,
                            lng:  -76.528423}} />
                        </Map>
                    </div>
                    <div className="col-12 col-md-10">
                        <h3 >DESCRIPTION OF INCIDENT</h3>            
                        <p>{this.props.incident.description}</p>                    
                    </div>
                </div>
                </div> 
                </div>
        ); }

      
        else if(this.props.incident == null) {
            return (<div></div>)
        }
    }
        
    
          
    }
    export default GoogleApiWrapper({
        apiKey: "AIzaSyCkpkkmeGkRg2EcNERVVVBQwU2MQOXfBRY"
      })(IncidentDetail)
      
    