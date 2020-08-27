import React from 'react';
import {  Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
    function RenderItem ({incident}){
     
        let url = incident.media.image_url_thumb;
        const onLoad=()=>{
            if(url==null){
            console.log("error: could not find picture");
            url= "https://cdn0.iconfinder.com/data/icons/sports-linear-white-with-square-black-background/2048/Cycle-512.png";
           };}
  

            return(
             
                <Row className="p-3">
   
                <Col xs={12} md={3} className=" m-1 p-5" >
                    <img  onLoad={onLoad(this)} src={url} width={200} alt={incident.title} />
                </Col>  
                <Col xs={12} md={8}  >
                <Link  to={`/case/${incident.id}`}>
                    <h3 className="mt-5">{incident.title}</h3> </Link>    
                    <p>{incident.description}</p>
                    <p>{new Date((incident.occurred_at)*1000).toDateString()} - {incident.address}</p>
                 
                </Col>  
             
                </Row>
                
                
          );
    }
    export default RenderItem;