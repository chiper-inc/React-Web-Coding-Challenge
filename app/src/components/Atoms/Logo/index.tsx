import React from 'react';
import Image from 'next/image';
import { Container } from './styles';
import imgLogo from '@/assets/images/logo.png';

interface LogoProps {
  size: number;
}

const Logo: React.FC<LogoProps> = ({ size }: LogoProps) => {
  return (
    <Container>
      <Image
        src={imgLogo}
        alt="BerlineiPolizeiLogo"
        width={size}
        height={size}
      />
    </Container>
  );
};

export { Logo };
