import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }: InputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input type="text" {...props} />
    </Container>
  );
};

export { Input };
