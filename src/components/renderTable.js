import React, { Component } from 'react';
import RenderItem from './RenderItem';
import { Pagination, Table } from 'react-bootstrap';


export default class RenderTable extends Component {
    constructor(props) {
        super(props);
        this.handleFirstPage = this.handleFirstPage.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.handlePrevPage = this.handlePrevPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
       // this.handlePageClick = this.handlePageClick.bind(this);
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
                const postData = slice.map(incident => <Table striped className="border border-dark p-4"><RenderItem  key={incident.id} incident={incident}/></Table>)

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
            <Pagination.Item className="m-1" key={number} id={number} onClick={() => this.handlePageClick(number)} >
            {number}
            </Pagination.Item>   
            ,
        );
        
       
        }

        return (
            <div className="container">
                <div >
                    {this.state.postData}
                </div>
                <div className="col-4 offset-2">
                    <Pagination  >
                    <Pagination.First activeLabel="First" className="m-1 " onClick={this.handleFirstPage} />
                    <Pagination.Prev className="m-1" onClick={this.handlePrevPage}/>
                    {items }
                    <Pagination.Next className="m-1"  onClick={this.handleNextPage}/>
                    <Pagination.Last className="m-1" onClick={this.handleLastPage}/>
                    </Pagination>
                </div>
            </div>
          
            
        )
    }
}


























