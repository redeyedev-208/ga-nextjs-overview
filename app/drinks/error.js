'use client';

const error = (error) => {
  console.log(error);
  return <div>{error.error}</div>;
};

export default error;
