import React, {Component} from 'react';
import { ArticleResumen } from '../../../components/articleResume/articleResume'; 
import { ApiBikewise } from '../../services/bikewise'
import { FormControl, Button, Row , Col,Pagination } from 'react-bootstrap';

class IndexPage extends Component {

  constructor(props) {
      super(props);
      this.state = {
          incidents : [],
          showincidents : [],
          page:1,
          status:"",
          hasError:false,
          erroeMsj: "",
          query:"",
          min:0,
          max:9,
          aferteDate:'',
          beforeDate:''
        };
    }


  pagination(page){
    let num = page-1;
    let allincident =  this.state.incidents;
    if( allincident.length > 0 ){
      allincident = allincident.slice((num*10),(num*10)+
      10 );
      this.setState({
        page: page
      });
      this.setState({
        showincidents: allincident
      });
    }
  }
  dateConv(e) {
    e = e || new Date();
    let value = Date.parse(e.target.value).toString().substr(0, Date.parse(e.target.value).toString().length - 3);
    return value;
  }

  getData(params){
    let incidentsPromesa = ApiBikewise.getIncidents(params);
    incidentsPromesa.then((response)=>{
      if( !response.error ){
        this.setState({
          incidents: response.incidents
        });

        this.setState({
          showincidents: response.incidents.slice(0, 9)
        });       
      this.props.changeStatusLoad(true)

      }else{
        this.setState({
          error: true
        });
        this.setState({
          erroeMsj: ""
        });
      }
    });
  }

  componentDidMount() {
    this.getData();
  }


  render() {


      let items = [];
      for(let i=0 ; i < Math.ceil(this.state.incidents.length/10) ; i++ ){
        let numpage = i +1;
        items.push(
          <Pagination.Item active={this.state.page === numpage} onClick={()=>{this.pagination(numpage)}}>{numpage}</Pagination.Item>
        );
      }
    if(  this.props.loading ){
      return(
          <div className="internalContainer">
           
            <Row className="Filters  mt-4  mb-4">
              <Col> 
                <FormControl
                  placeholder="Search case descriptions"
                  aria-label="Search"
                  onChange={(e) => {
                    this.setState({query: e.target.value});
                  }}
                  
                />
              </Col>
              <Col md="auto">
                <FormControl
                  placeholder="From"
                  aria-label="FromDate"
                  type="date"
                  onChange={(e) => {
                    this.setState({aferteDate:this.dateConv(e) });
                  }}
                />
              </Col>
              <Col xs lg="2">
                <FormControl
                  placeholder="to"
                  aria-label="toDate"
                  type="date"
                  onChange={(e) => {
                    this.setState({beforeDate: this.dateConv(e)});
                  }}
                />
              </Col>

              <Col xs lg="2">
                <Button variant="primary" onClick={() => {
                  this.getData({query: this.state.query, aferteDate: this.state.aferteDate, beforeDate: this.state.beforeDate});}}>
                    Find Cases
                </Button>
              </Col>
            </Row>
            <div> Total Results {this.state.incidents.length} </div>
            { this.state.showincidents.length > 0 ?
                this.state.showincidents.map((incident)=>{
                  return  <ArticleResumen key={incident.id} id={incident.id} imagen={incident.media.image_url_thumb} title={incident.title}  > {incident.description}  </ArticleResumen>
                }) 
                :
                    <h4>No Elements</h4> }
            { this.state.showincidents.length > 0 &&
              <Pagination>
                {this.state.page-1 !== 0 &&
                  <Pagination.Prev onClick={()=>{this.pagination(this.state.page-1)}}></Pagination.Prev>
                }
                  {items}
                {this.state.page !== Math.ceil( this.state.incidents.length/10) &&
                  <Pagination.Next onClick={()=>{this.pagination(this.state.page+1)}}></Pagination.Next>
                }
              </Pagination>
            }    
          </div>
      )
    }else{
      return ("")
    }
  };
}

export default IndexPage;