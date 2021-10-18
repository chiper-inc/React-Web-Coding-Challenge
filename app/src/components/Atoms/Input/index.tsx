import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: (event: any) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  ...props
}: InputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input type="text" {...props} onChange={onChange} />
    </Container>
  );
};

export { Input };
