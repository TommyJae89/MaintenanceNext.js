// src/pages/api/tasks.js

import prisma from '@/lib/prisma';

// GET and POST handler for tasks
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const tasks = await prisma.task.findMany({
        orderBy: { receiveDate: 'asc' },
      });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  } else if (req.method === 'POST') {
    try {
      const task = await prisma.task.create({
        data: req.body,
      });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add task' });
    }
  }
}
