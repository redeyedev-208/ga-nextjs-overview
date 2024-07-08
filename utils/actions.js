'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath('/tasks');
};

export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const content = formData.get('content');
  const Task = z.object({
    content: z.string().min(7),
  });
  try {
    Task.parse({ content });
    // Testing errors just add an s to the end of task and you'll see an error as expected.
    // Reason being is that our model is called task and not tasks for the table name.
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath('/tasks');
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: { id },
  });
};

// When redirecting we need to be careful to use the correct path. In this case, we are redirecting to /tasks.
// Don't place redirects in a try blocks to avoid headaches, plus it isn't the best way to handle errors.
// Caveat ensure to also import the correct redirect function from next/navigation and not the api function.
export const editTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  });
  redirect('/tasks');
};
