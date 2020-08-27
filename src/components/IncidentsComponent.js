import React from 'react';
import { Loading } from './LoadingComponent';
import RenderTable from  './renderTable';
const Incidents = props => {
    
  
  
        
        if (props.incidents.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.incidents.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.data.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
        {
            return(
               
           <RenderTable incidents={props.incidents.data.incidents}/>)
            
       }}
  
  


    

export default Incidents;