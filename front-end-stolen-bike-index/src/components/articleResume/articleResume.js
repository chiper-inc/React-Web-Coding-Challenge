import React, { Children } from 'react';
import { Media } from 'react-bootstrap';

import './articleResume.scss';
var classNames = require('classnames');

export const ArticleResumen = ({ imagen , title, date , children}) => {

  return (
    <Media as="li" className="articleResumen">
      <div className="articleResumen-containerImg mr-3">
        <img src={ imagen } className="articleResumen-img" alt="Generic placeholder" />
      </div>
      <Media.Body className="articleResumen-containerText">
        <a className="articleResumen-link"> 
          <h3 className="articleResumen-title"> {title} </h3>
        </a>
        <p className="articleResumen-resumen">
          {children}
        </p>
        <p className="articleResumen-date"> {date} </p>
      </Media.Body>
    </Media>
  );
}


