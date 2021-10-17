import {
  DescriptionDetailsBike,
  TitleDetailsBike,
} from '@/components/Molecules';
import { IBikes } from '@/Interfaces';
import React from 'react';
import { Container } from './styles';
import dynamic from 'next/dynamic';

interface DetailsBikeProps {
  bike: IBikes;
}

const DetailsBike: React.FC<DetailsBikeProps> = ({
  bike,
}: DetailsBikeProps) => {
  const MyMap = React.useMemo(
    () =>
      dynamic(() => import(`@/components/Atoms/Map`), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <Container>
      <TitleDetailsBike title={bike?.title} location={bike?.stolen_location} />
      <MyMap />
      <DescriptionDetailsBike
        description={bike?.description}
        serial={bike?.serial}
        url={bike?.url}
        image={bike?.large_img}
      />
    </Container>
  );
};

export { DetailsBike };
