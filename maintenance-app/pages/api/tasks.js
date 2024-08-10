// pages/api/tasks.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // Fetch all tasks
      const tasks = await prisma.task.findMany();
      res.status(200).json(tasks);
      break;
    case 'POST':
      // Add a new task
      const newTask = await prisma.task.create({
        data: req.body,
      });
      res.status(201).json(newTask);
      break;
    case 'PUT':
      // Update a task
      const { id, ...updatedData } = req.body;
      const updatedTask = await prisma.task.update({
        where: { id: Number(id) },
        data: updatedData,
      });
      res.status(200).json(updatedTask);
      break;
    case 'DELETE':
      // Delete a task
      const { taskId } = req.query;
      await prisma.task.delete({
        where: { id: Number(taskId) },
      });
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
