import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from '../NavMenu'

export const Layout = ({ children }) => (
    <div className='layout'>
        <NavMenu />
        <Container fluid={true}>
            {
                children
            }
        </Container>
    </div>
)