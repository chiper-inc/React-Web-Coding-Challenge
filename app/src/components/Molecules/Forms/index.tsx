import { Button, Input, InputDate } from '@/components/Atoms';
import React from 'react';
import { Container } from './styles';

interface FormsProps {
  searchWord: (event: any) => void;
  from: (event: any) => void;
  to: (event: any) => void;
  onSearch: (event: any) => void;
}

const Forms: React.FC<FormsProps> = ({ searchWord, from, to, onSearch }) => {
  return (
    <Container>
      <Input
        label="Buscar por Descrição"
        name="word"
        onChange={(event) => searchWord(event)}
      />
      <InputDate label="De" name="from" onChange={(event) => from(event)} />
      <InputDate label="Até" name="to" onChange={(event) => to(event)} />
      <Button onClick={onSearch}>Buscar</Button>
    </Container>
  );
};

export { Forms };
