import { CardBikes } from '@/components/Molecules';
import { IBikes } from '@/Interfaces';
import React from 'react';
import { Container, Total } from './styles';

interface ListBikesProps {
  list: IBikes[];
  total: number;
}

const ListBikes: React.FC<ListBikesProps> = ({
  list,
  total,
}: ListBikesProps) => {
  return (
    <Container>
      <Total>Total: {total}</Total>
      {list &&
        list.length > 0 &&
        list.map((bike) => <CardBikes key={bike.id} bike={bike} />)}
    </Container>
  );
};

export { ListBikes };
