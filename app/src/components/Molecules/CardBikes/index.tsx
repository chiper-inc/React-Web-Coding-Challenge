import { Card, NoContent, Thumb } from '@/components/Atoms';
import { IBikes } from '@/Interfaces';
import { convertTimestamp } from '@/utils/dates';
import React from 'react';
import { Container, Details, Infos, Title, Description } from './styles';
import Link from 'next/link';

interface CardBikesProps {
  bike: IBikes;
}

const CardBikes: React.FC<CardBikesProps> = ({ bike }: CardBikesProps) => {
  return (
    <Card>
      <Container>
        <Thumb url={bike.thumb} size={100} alt={bike.title} />
        <Infos>
          <Link href={`/details/${bike.id}`}>
            <a>
              <Title>{bike?.title}</Title>
            </a>
          </Link>
          {bike?.description ? (
            <Description>{bike?.description}</Description>
          ) : (
            <NoContent>Sem Descrição</NoContent>
          )}
          <Details>
            {convertTimestamp(bike?.date_stolen)} {bike?.stolen_location}
          </Details>
        </Infos>
      </Container>
    </Card>
  );
};

export { CardBikes };
