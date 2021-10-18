import { BaseLayout, DetailsBike, HeaderDetails } from '@/components/Organisms';
import { IBikes } from '@/Interfaces';
import React from 'react';

interface PageDetailsProps {
  bike: IBikes;
}

const PageDetails: React.FC<PageDetailsProps> = ({
  bike,
}: PageDetailsProps) => {
  return (
    <BaseLayout>
      <HeaderDetails />
      <DetailsBike bike={bike} />
    </BaseLayout>
  );
};

export default PageDetails;
