'use client';
// Note: If you don't place the Toaster inside the {} you'll see an interger above the input field.
// Note: This is seen on the /tasks page. Change the code and see the difference.
import { Toaster } from 'react-hot-toast';

// Note: Depending on the library you use the setup might be different.
// Redux toolkit for example has a different setup.
// This is like creating a store in redux toolkit.
// React query has a different setup.
// This is like creating a queryClient in react query.
const Providers = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;
