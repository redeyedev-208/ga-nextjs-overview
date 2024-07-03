import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  console.log('home page');
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next.js Overview</h1>
      <Link
        href='/client'
        className='btn btn-accent'
      >
        Do the stuffs
      </Link>
    </div>
  );
};

export default HomePage;
