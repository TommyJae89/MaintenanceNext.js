import { prisma } from '../../lib/prisma'; // Adjust path as needed

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { description, priority, category, acceptanceDate, email, phone } = req.body;
    try {
      const newTask = await prisma.task.create({
        data: {
          description,
          priority,
          category,
          acceptanceDate,
          email,
          phone,
        },
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'Error creating task' });
    }
  }
  // Handle other methods if needed (GET, DELETE, etc.)
}
