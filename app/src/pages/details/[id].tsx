import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PageDetails from '@/components/Templates/PageDetails';
import useLoading from '@/contexts/Loading';
import { IBikes } from '@/Interfaces';
import { getBikeById } from '@/services/search';

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { showLoading, hideLoading } = useLoading();

  const [bike, setBike] = React.useState<IBikes>();

  const getDetails = async (id: string) => {
    showLoading();
    const res = await getBikeById(id);
    setBike(res.bike);
    hideLoading();
  };

  React.useEffect(() => {
    if (id) getDetails(id as string);
  }, [id]);

  return (
    <>
      <PageDetails bike={bike as IBikes} />
    </>
  );
};

export default Details;
