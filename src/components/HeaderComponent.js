import React, { Component } from 'react';
import { Button, Label} from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import{Link} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(values) {     
        this.props.postQuery(values);    
         
    }
    handleSubmit(values) {     
        this.props.postQuery(values);    
        this.props.resetQuery();    
    }
    render() {
        return(
            <div className="container">  
                <Link className="headerLink" to="/cases">           
                    <div className="row" >
                        <div className="col-8 m-auto">
                            <div className="row">
                                <div className="col-4" > 
                                    <img width={200} className="headerImg"  src="https://images.vexels.com/media/users/3/162884/isolated/preview/24e7b433b499dd2c9823d02ee72d939c-cresta-de-berlin-by-vexels.png" alt="Cresta de berlin Transparent PNG" title="Cresta de berlin Transparent PNG"/>                      
                                </div>
                                <div className="col-8 ml-auto"  >
                                    <h1 className="headerText">Berlin Police Department</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link> 
                <div className="row">
                    <div className="col-0 m-auto">
                            <Form model="query"  onSubmit={(values) => this.handleSubmit(values)} onChange={(values)=>this.handleChange(values)} >              
                                <div className="col-4 formElement ">
                                    <Control.text model=".query" id="query" name="query" placeholder="Search cases by incident" className="form-control " />                                             
                                </div>
                                
                                <div className="col-3 formElement">
                                    <Label for="occurred_after" className="formLabel">From:</Label>
                                    <Control type="date" model=".occurred_after" id="occurred_after" name="occurred_after" placeholder="From"  className="form-control"/>
                                </div>
                                <div className="col-3 formElement">
                                    <Label for="occurred_before" className="formLabel">To</Label>
                                    <Control type="date" model=".occurred_before" id="occurred_before" name="occurred_before" placeholder="To"  className="form-control"  />                                           
                                </div> 
                                <div className="col-2 formElement">
                                    <Button className="formElement" type="submit" > Find Cases</Button>
                                </div>             
                                
                                    
                          
                            </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;