import React from 'react';
import PropTypes from 'prop-types';

import bike from './images/bike.png';

export const CaseItem = (
    {
        title,
        url,
        description,
        dateTheft,
        dateReported,
        location
    }) => {

    if (url === null) {
        url = bike;
    }

    if (description === null) {
        description = '--- No description ---';
    }

    return (
        <div className="card animate__animated animate__fadeIn">
            <picture>
                <img src={url} alt={title} />
            </picture>
            <div className="info-wrapper">
                <h2>{title}</h2>
                <div className="info">
                    <label>Location:</label>
                    <p>{location}</p>
                </div>
                <div className="info">
                    <label>Date of the Theft:</label>
                    <p>{dateTheft}</p>
                </div>
                <div className="info">
                    <label>Date of the Report:</label>
                    <p>{dateReported}</p>
                </div>
                <div className="info description">
                    <label>Description:</label>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

CaseItem.propTypes = {
    title: PropTypes.string.isRequired
}
CaseItem.defaultProps = {
    description: PropTypes.description === null ? '---' : PropTypes.description
}
