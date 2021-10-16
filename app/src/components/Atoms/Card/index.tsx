import React from 'react';
import { Container } from './styles';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  return <Container>{children}</Container>;
};

export { Card };
