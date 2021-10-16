import React from 'react';
import Image from 'next/image';
import { Container } from './styles';
import NoImage from '@/assets/images/no-image.jpg';

interface ThumbProps {
  url: string;
  size: number;
  alt: string;
}

const Thumb: React.FC<ThumbProps> = ({ url, size, alt }: ThumbProps) => {
  return (
    <Container>
      <Image src={url || NoImage} alt={alt} width={size} height={size} />
    </Container>
  );
};

export { Thumb };
