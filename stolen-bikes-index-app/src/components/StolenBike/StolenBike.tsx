import React from 'react';
import { useParams } from 'react-router';

export default function StolenBike() {

  const params = useParams<{id:string}>();
  console.log(params.id);
  return (
    <div>a</div>
  );
}
