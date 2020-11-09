import React, { Children } from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgNofound from '../../assets/img/imgNoF.png'

import './articleResume.scss';
var classNames = require('classnames');

export const ArticleResumen = ({ id, imagen , title, date , children}) => {
  let img;
  if( ! imagen){
    img=imgNofound;
  }else{
    img=imagen;

  }
  return (
    <Media as="li" className="articleResumen">
      <div className="articleResumen-containerImg mr-3">
        <img src={ img } className="articleResumen-img" alt="Generic placeholder" />
      </div>
      <Media.Body className="articleResumen-containerText">

        <Link className="articleResumen-link"  to={`/incidents/${id}`}> 
          <h3 className="articleResumen-title"> {title} </h3>
        </Link>
        <p className="articleResumen-resumen">
          {children}
        </p>
        <p className="articleResumen-date"> {date} </p>
      </Media.Body>
    </Media>
  );
}


