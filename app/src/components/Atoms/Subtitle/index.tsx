import React from 'react';
import { Container } from './styles';

interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }: SubtitleProps) => {
  return (
    <Container>
      <p>{subtitle}</p>
    </Container>
  );
};

export { Subtitle };
