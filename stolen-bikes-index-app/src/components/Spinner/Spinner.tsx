import React from 'react';
import spinner from '../../assets/loading.gif';
import './Spinner.css';

export default function Spinner() {

  return (
    <div className="spinner">
      <img src={spinner} alt="" />
    </div>
  );
}
