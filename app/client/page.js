'use client';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const ClientPage = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count === 0) {
      toast.error('Cannot decrease the count!');
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1 className='text-7xl font-bold mb-4 capitalize'>{count}</h1>
      <button
        className='btn btn-primary'
        onClick={() => setCount(count + 1)}
      >
        increase count
      </button>
      <button
        className='btn btn-secondary ml-4 capitalize'
        onClick={handleDecrease}
      >
        decrease count
      </button>
      <Toaster />
    </div>
  );
};

export default ClientPage;
