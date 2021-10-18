import React from 'react';
import { Container } from './styles';

interface NoContentProps {
  children: React.ReactNode;
}

const NoContent: React.FC<NoContentProps> = ({ children }: NoContentProps) => (
  <Container>{children}</Container>
);

export { NoContent };
