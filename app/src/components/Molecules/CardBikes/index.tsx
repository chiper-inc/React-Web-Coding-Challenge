import { Card, Thumb } from '@/components/Atoms';
import { IBikes } from '@/Interfaces';
import React from 'react';

interface CardBikesProps {
  bike: IBikes;
}

const CardBikes: React.FC<CardBikesProps> = ({ bike }: CardBikesProps) => {
  return (
    <Card>
      <Thumb url={bike.thumb} size={100} alt={bike.title} />
      <p>{bike?.title}</p>
      <p>{bike?.description}</p>
    </Card>
  );
};

export { CardBikes };
