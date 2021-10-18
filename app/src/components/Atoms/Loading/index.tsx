import React from 'react';
import { Container, Spinner } from './styles';

const Loading: React.FC = () => (
  <Container>
    <Spinner />
  </Container>
);

export { Loading };
