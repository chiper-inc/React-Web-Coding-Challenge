import { Thumb, TitleParagraph } from '@/components/Atoms';
import React from 'react';
import { Container } from './styles';
import IconError from '@/assets/images/ic_error.svg';

const Empty: React.FC = () => {
  return (
    <Container>
      <Thumb url={IconError} alt="Error" size={200} />
      <TitleParagraph>Sem Resultados</TitleParagraph>
    </Container>
  );
};

export { Empty };
