import React from 'react';

const Currency = ({ currency }) => {
  if (currency === 'UAH') return <span>&#8372;</span>;
  if (currency === 'USD') return <span>&#36;</span>;
};

export default Currency;
