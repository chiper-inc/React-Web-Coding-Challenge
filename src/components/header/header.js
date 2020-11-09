import React from 'react';
import { FormControl, Button, Row , Col } from 'react-bootstrap';
import './header.scss';
import LogoMain from '../../assets/img/oso.png';

export const Header = ({}) => {
  return (
   <header>
       <Row>
            <Col md="auto">  <img src={LogoMain} /></Col>
            <Col className="mt-5">    
                <h1> Police Departament of Berlin </h1>
                <div> Stolen bykes</div> 
            </Col>

       </Row>
   </header>);
}
