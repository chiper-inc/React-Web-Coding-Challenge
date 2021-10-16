import { CardBikes } from '@/components/Molecules';
import { IBikes } from '@/Interfaces';
import React from 'react';

interface ListBikesProps {
  list: IBikes[];
}

const ListBikes: React.FC<ListBikesProps> = ({ list }: ListBikesProps) => {
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((bike) => <CardBikes key={bike.id} bike={bike} />)}
    </>
  );
};

export { ListBikes };
