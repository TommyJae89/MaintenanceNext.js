// src/pages/api/[id].js

import prisma from '@/lib/prisma';

// PUT and DELETE handler for individual tasks
export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.task.delete({
        where: { id: parseInt(id) },
      });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }
}
