import { Logo, Subtitle, Title } from '@/components/Atoms';
import React from 'react';
import { Container } from './styled';

interface TitlePageProps {
  title: string;
  subtitle: string;
}

const TitlePage: React.FC<TitlePageProps> = ({
  title,
  subtitle,
}: TitlePageProps) => {
  return (
    <Container>
      <Logo size={100} />
      <div>
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
      </div>
    </Container>
  );
};

export { TitlePage };
