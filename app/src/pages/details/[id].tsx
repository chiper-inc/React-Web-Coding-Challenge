import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Details: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div />;
};

export default Details;
