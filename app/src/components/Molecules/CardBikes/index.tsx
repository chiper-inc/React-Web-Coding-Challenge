import { Card, Thumb } from '@/components/Atoms';
import { IBikes } from '@/Interfaces';
import { convertTimestamp } from '@/utils/dates';
import React from 'react';
import {
  Container,
  Description,
  Details,
  Infos,
  NoContent,
  Title,
} from './styles';

interface CardBikesProps {
  bike: IBikes;
}

const CardBikes: React.FC<CardBikesProps> = ({ bike }: CardBikesProps) => {
  return (
    <Card>
      <Container>
        <Thumb url={bike.thumb} size={100} alt={bike.title} />
        <Infos>
          <Title>{bike?.title}</Title>
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
