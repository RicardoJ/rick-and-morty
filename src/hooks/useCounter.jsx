import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementPage = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, incrementCount, decrementPage };
}
