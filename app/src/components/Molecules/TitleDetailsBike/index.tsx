import { TextParagraph, TitleParagraph } from '@/components/Atoms';
import React from 'react';
import { Container } from './styles';

interface TitleDetailsBikeProps {
  title: string | undefined;
  location: string | undefined;
}

const TitleDetailsBike: React.FC<TitleDetailsBikeProps> = ({
  title,
  location,
}) => {
  return (
    <Container>
      <TitleParagraph>{title}</TitleParagraph>
      <TextParagraph>{location}</TextParagraph>
    </Container>
  );
};

export { TitleDetailsBike };
