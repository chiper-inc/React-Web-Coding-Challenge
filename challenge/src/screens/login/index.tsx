import React, { useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';
import images from '../../assets/images';
import { useLocation, Link } from 'react-router-dom';
import { authorizeApplication } from '../../services/auth';
import * as Routing from '../../router/routing';

const Login = () => {
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();
  useEffect(() => {
    const code = query.get('code');
    if (code) {
      authorizeApplication({ code });
    }
  }, []);
  return (
    <Container className="container-bike-form">
      <Form className="login-form">
        <img alt="bike logo" src={images.bike} className="login-logo" />
        {/*<a
          className="btn btn-primary login-button"
          href={`${process.env.REACT_APP_API_URL_BASE}oauth/authorize?client_id=${process.env.REACT_APP_API_APP_ID}&redirect_uri=${process.env.REACT_APP_APP_REDIRECT}&response_type=code&scope=read_user+write_user+read_bikes+write_bikes+read_organization_membership+write_organizations`}
        >
          Login
        </a>*/}
        <Link className="btn btn-primary login-button" to={`/dashboard${Routing.HomeRoute}`}>Login</Link>
      </Form>
    </Container>
  );
};

export default Login;
