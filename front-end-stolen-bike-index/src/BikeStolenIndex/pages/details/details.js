import React, {Component} from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {  Button, Row , Col} from 'react-bootstrap';
import { ApiBikewise } from '../../services/bikewise'



function mapSource(address) {
  const newAddress = address.replace(/ /g, "%20");
  const src =
    "https://maps.google.com/maps?q=" +
    newAddress +
    "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return src;
}


class DetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          title:"",
          address:"",
          description :"",
          img:"",
          date:"",
         };
         this.props.changeStatusLoad(false)
      }

      getdetails(id){
        let incidentsPromesa = ApiBikewise.getIncident(id);
        incidentsPromesa.then((response)=>{
          this.setState({
            title: response.incident.title
          });
          this.setState({
            address: response.incident.address
          });
          this.setState({
            description: response.incident.description
          });
          this.setState({
            img: response.incident.media.image_url
          });
          this.setState({
            date: new Date(response.incident.occurred_at * 1000).toString()
          });
          this.props.changeStatusLoad(true)
        })
      }

      componentDidMount() {
        this.getdetails(this.props.match.params.Id);     
      }
      

    render() {
      
      if(  this.props.loading ){
        return(
        <div className="detailsPage">

            <Link to="/"><Button variant="link">Back</Button>  </Link>
            <h1 >{this.state.title}</h1>
            <h3 >{this.state.address}</h3>
            <h4 >published :{this.state.date} </h4>
            <Row>
              <Col>
              <iframe
                    width="100%"
                    height="500"
                    src={mapSource(this.state.address)}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  </Col>

              </Row> 

          { this.state.description &&
          <div>
            <h3>DESCRIPTION OF INCIDENT</h3>
            <p>{this.state.description}</p>
          </div>
          }     
              <img src={this.state.img}></img>
        </div>
        )}else{
          return("")
        }
      }
}

export default DetailsPage;