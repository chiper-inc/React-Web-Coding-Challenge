import { Button } from '@/components/Atoms';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Container } from './styles';

interface BackProps {
  onBack: (event: any) => void;
}

const Back: React.FC<BackProps> = ({ onBack }: BackProps) => {
  return (
    <Container>
      <Button outlined onClick={onBack} startIcon={<FaArrowLeft />}>
        Voltar
      </Button>
    </Container>
  );
};

export { Back };
