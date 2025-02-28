import db from '@/utils/db';
// This is a wrapper to the response object that will be sent to the client
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks });
};

export const POST = async (request) => {
  const data = await request.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ data: task });
};
