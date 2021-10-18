import { Button, Input, InputDate } from '@/components/Atoms';
import React from 'react';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { Container } from './styles';

interface FormsProps {
  searchWord: (event: any) => void;
  from: (event: any) => void;
  to: (event: any) => void;
  onSearch: (event: any) => void;
  onClear: (event: any) => void;
}

const Forms: React.FC<FormsProps> = ({
  searchWord,
  from,
  to,
  onSearch,
  onClear,
}: FormsProps) => {
  return (
    <Container>
      <Input
        label="Buscar por Descrição"
        name="query"
        onChange={(event) => searchWord(event)}
      />
      <InputDate
        label="De"
        name="stolen_after"
        onChange={(event) => from(event)}
      />
      <InputDate
        label="Até"
        name="stolen_before"
        onChange={(event) => to(event)}
      />
      <Button onClick={onSearch} startIcon={<FaSearch />}>
        Buscar
      </Button>
      <Button onClick={onClear} outlined startIcon={<FaTrash />}>
        Limpar
      </Button>
    </Container>
  );
};

export { Forms };
