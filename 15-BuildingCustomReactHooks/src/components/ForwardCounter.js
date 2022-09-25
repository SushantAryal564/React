import { useState, useEffect } from 'react';
import useCounter from './Hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
