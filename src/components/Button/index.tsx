import { ReactNode } from 'react';
import { StyledButton } from './styles';

interface IProps {
  children: ReactNode;
  onClick: () => void;
  size?: string;
  disabled?: boolean;
}

export const Button = ({ children, ...rest }: IProps) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};
