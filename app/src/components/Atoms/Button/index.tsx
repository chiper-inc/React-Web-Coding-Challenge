import { globalStyles } from '@/styles/globalStyles';
import React, { ReactNode } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  outlined?: boolean;
  disabled?: boolean;
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color = globalStyles.colors.primary,
  outlined = false,
  disabled = false,
  children,
  startIcon,
  endIcon,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Container
        disabled={disabled}
        color={color}
        outlined={outlined}
        {...props}
      >
        {loading ? (
          <FaSpinner className="spin" />
        ) : (
          <>
            {startIcon}
            <span>{children}</span>
            {endIcon}
          </>
        )}
      </Container>
    </>
  );
};

export { Button };
