import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../images/bicicleta.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img src={logo} alt="bikesReport" className="Navbar_brand-logo"/>
                        <span className=" Navbar__title font-weight-bold">Bikes Reports</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar