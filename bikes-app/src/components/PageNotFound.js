import React from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import './styles/PageNotFound.css'

function PageNotFound() {
    return (
        <div>
            <div className="container-fluid notFoundContainer">
                <div className="row notFound">
                    <div className="col-12">
                        <h1>Oops!</h1>
                        <h2>404 - Page not found</h2>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link className="btn btn-primary br-4" to="/">Go To Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound