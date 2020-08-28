
import { Loading } from './LoadingComponent';
import React, { Component } from 'react';
import { ButtonGroup, Button, ListGroupItem, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderItem ({incident}){
     
        let url = incident.media.image_url_thumb;
        const onLoad=()=>{
            if(url==null){
            url= "https://cdn0.iconfinder.com/data/icons/sports-linear-white-with-square-black-background/2048/Cycle-512.png";
           };}
  

            return(
               
                <ListGroupItem key={incident.id.toString()}>
                   
                    <img className="float-left " onLoad={onLoad(this)} src={url} width={200} alt={incident.title} />
                    <Link  to={`/case/${incident.id}`}><h3 className="mt-5">{incident.title}</h3> </Link> 
                    <p>{incident.description}</p>
                    <p>{new Date((incident.occurred_at)*1000).toDateString()} - {incident.address}</p>
                
                </ListGroupItem>
                 
                
     
         
             
                
                
                
          );
    }
 class RenderTable extends Component {
    constructor(props) {
        super(props);
        this.handleFirstPage = this.handleFirstPage.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 1
        };
      
    }
    receivedData() {
       
                const data = this.props.incidents;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
          
                const postData = slice.map(incident =>
              <RenderItem  incident={incident}/>)

                this.setState({
               
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
        
    }
    componentDidMount() {
        this.receivedData()
    }
    
    handleFirstPage(){
        const selectedPage = 0;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        }, () => {
                this.receivedData()
            });
        
    }
    handleLastPage(){
        const selectedPage = 2;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        }, () => {
                this.receivedData()
            });
        
    }
    handlePageClick=(number)=>{
        const selectedPage = number-1;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        }, () => {
                this.receivedData()
            });
        
    }
    handleNextPage(){
        if (this.state.currentPage+1>=this.state.pageCount){
            this.setState({
                
            })
           }
        
       else{
        const selectedPage = (this.state.currentPage+1);
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        }, () => {
                this.receivedData()
            });
       }
    }
    handlePrevPage(){
       if (this.state.currentPage<=0){
        this.setState({
            
        })
       }
       else{
        const selectedPage = (this.state.currentPage-1);
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset:offset
        }, () => {
                this.receivedData()
            });
        }
        
    }
   
  
    render() {
        let items = [];
        for (let number = 1; number <= this.state.pageCount; number++) {
            items.push(
                <Button className="m-1" id={number} onClick={() => this.handlePageClick(number)} >
                {number}
                </Button>   
            );
        }
   

        return (
          <React.Fragment>
                <div>
                 <ListGroup>
                      {this.state.postData}
                  </ListGroup>
                   
                    
                </div>
      
                <div >
                    <ButtonGroup  >
                    <Button  className="m-1 " onClick={this.handleFirstPage}>&lt;&lt; FIRST</Button>
                    <Button  className="m-1" onClick={this.handlePrevPage}>&lt; PREV</Button>
                    {items }
                    <Button className="m-1"  onClick={this.handleNextPage}>	 NEXT &gt;</Button>
                    <Button className="m-1" onClick={this.handleLastPage}>LAST &gt;&gt;</Button>
                    </ButtonGroup>
                </div>
                </React.Fragment>
   
          
            
        )
    }
}
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
                            <h4 className="red">{props.incidents.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
         else if(props.incidents.incidents.incidents.length == 0){
             return(<div><h4 className="m-auto noResults">No results</h4></div>)
             

         }
         else
        {
            return(
                <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-8 m-auto">
                    <h4 className="total">Total:{props.incidents.incidents.incidents.length}</h4>
                    </div>
                    </div>
                    <div className="row ">
                        <div className="col-8 m-auto " >                  
                            <RenderTable incidents={props.incidents.incidents.incidents}/>
                        </div>
                    </div>
                </div>
                </React.Fragment>)
            
       }}
  
  


    

export default Incidents;