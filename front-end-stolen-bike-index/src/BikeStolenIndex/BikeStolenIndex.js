import React, {Component} from 'react';
import { Header } from '../components/header/header';
import { DetailsPageC } from '../BikeStolenIndex/pages/details/details.container';
import { IndexPageC } from   '../BikeStolenIndex/pages/index/index.container';
import {  BrowserRouter as Router,Route, Redirect, Switch, NavLink } from 'react-router-dom';
import {Row, Container,Spinner} from 'react-bootstrap'
import './BikeStolenIndex.scss';

class BikeStolenIndex extends Component {
  

    constructor(props) {
        super(props);
        this.state = {  };
      }

      componentDidMount() {
      }
      
    render() {
        return(
            
            <div className="mainContainer">
                <Router>
                    <Container>
                        <Header></Header>
                       
                        <Row className="justify-content-md-center ">
                           
                            <Switch>
                                <Route path="/incidents/:Id">
                                    <DetailsPageC /> 
                                </Route>
                                <Route path="/">                      
                                    <IndexPageC />   
                                </Route>

                            </Switch>
                        </Row>
                         { ! this.props.loading &&      
                        <Row className="justify-content-md-center ">
                            <Spinner animation="border" />
                        </Row>
                        } 

                    </Container>
                    
                </Router>
            </div>
        )};
 
}

export default BikeStolenIndex;