import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav,Button,  Col, Row} from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import{Link} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {     
        this.props.postQuery(values);         
    }
    render() {
        return(
            <div className="container">  
                <Link className="headerLink" to="/cases">           
                <div className="row" >
                    <div className="col-8 m-auto">
                        <Navbar light  > 
                            <img width={200} className="headerImg"  src="https://images.vexels.com/media/users/3/162884/isolated/preview/24e7b433b499dd2c9823d02ee72d939c-cresta-de-berlin-by-vexels.png" alt="Cresta de berlin Transparent PNG" title="Cresta de berlin Transparent PNG"/>                      
                            <NavbarBrand className="mr-auto" href="/cases" ><h1>Berlin Police Department</h1></NavbarBrand>
                            <Nav navbar  className="ml-auto">   
                            </Nav>          
                        </Navbar>
                    </div>
                     
                </div>
                </Link> 
                <div className="row">
                    <div className="col-8 m-auto">
                            <Form model="query"  onSubmit={(values) => this.handleSubmit(values)} onChange={(values)=>this.handleSubmit(values)}>              
                                <div className="col-4 formElement query">
                                    <Control.text model=".query" id="query" name="query" placeholder="Search by incident" className="form-control "/>                                             
                                </div>
                                <div className="col-2 formElement">
                                    <Control.text model=".occurred_after" id="occurred_after" name="occurred_after" placeholder="From"  className="form-control"/>
                                </div>
                                <div className="col-2 formElement">
                                    <Control.text model=".occurred_before" id="ocurred_before" name="occurred_before" placeholder="To"  className="form-control"  />                                           
                                </div>                               
                                
                                    <Button className="formElement" type="submit" > Find Cases</Button>
                          
                            </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;