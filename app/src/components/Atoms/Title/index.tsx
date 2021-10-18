import React from 'react';
import { Container } from './styles';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }: TitleProps) => {
  return <Container>{title}</Container>;
};

export { Title };
