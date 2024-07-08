'use client';
import { deleteTask } from '@/utils/actions';
import { useFormStatus } from 'react-dom';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className='btn btn-error btn-xs capitalize'>
      {pending ? 'pending' : 'delete'}
    </button>
  );
};
const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input
        type='hidden'
        name='id'
        value={id}
      />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
