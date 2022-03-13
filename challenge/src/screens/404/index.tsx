import React from 'react';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import * as Routing from '../../router/routing';

const NotFound = () => {
  return (
    <div className="root container-not-found">
      <img src={images.notFound} alt="not found" />
      <Link to={Routing.LoginRoute}>
        Login
      </Link>
    </div>
  );
};

export default NotFound;
