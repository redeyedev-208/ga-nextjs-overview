import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  console.log('home page');
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next Overview</h1>
      <p className='text-lg mb-4'>
        This is a Next.js application using Prisma, demonstrating how to click
        between server and client views. Where we can display toasts, for
        success and error states and use a new React hook for forms called
        useFormStatus. We are are sending new tasks to a database to persist any
        new tasks.
      </p>
      <p className='text-lg mb-4'>
        We are able to also build out API ideas within VSCode using the Thunder
        Client extension. All that is needed is to create an api folder and
        running the dev server where the routes related to CRUD operations can
        be added.
      </p>

      <p className='text-lg mb-4'>
        The example of a Provider has also been added to the code for reference
        on how to use it. Only difference will be in the Provider that is being
        used, for example like Redux Toolkit, UseQuery, or the Context API for
        example.
      </p>

      <p className='text-lg mb-4'>
        Lastly we have deployed this to Vercel, where we can see the application
        running in production. This is a great way to see how the application is
        working in a production environment.
      </p>

      <Link
        href='/client'
        className='btn btn-accent'
      >
        Go to client view
      </Link>
    </div>
  );
};

export default HomePage;
