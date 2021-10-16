import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputDateProps> = ({
  label,
  ...props
}: InputDateProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input type="date" {...props} />
    </Container>
  );
};

export { Input };
