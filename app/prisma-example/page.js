import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log(
    'prisma example that it is running but not creating a task in the database',
  );
  // Leaving this here for testing purposes as this creates a new task in the database everytime
  // await prisma.task.create({
  //   data: {
  //     content:
  //       'prisma is running, so anytime a request is made to this page, this task will be created in the database',
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to display...</h2>;
  }

  return (
    <div>
      <h1 className='text-3xl font-medium mb-4'>
        Prisma Example of Saved Tasks
      </h1>
      {tasks.map((task) => (
        <h2
          key={task.id}
          className='text-xl py-2'
        >
          {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaExample;
