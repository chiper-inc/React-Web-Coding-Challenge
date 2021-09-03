import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    return (
        <div>
            <p>Logo</p>
            <Link to={'/'}>
             <p>Police Departament of Berlin</p>
             <p>Stolen bykes</p>
             </Link>
        </div>
    )
}

export default Nav
