import { FastifyRequest, FastifyReply } from 'fastify';
import { getAllFruits } from '../services/fruit.service';
import { AppError } from '../utils/AppError';

export async function getFruitsHandler(
  req: FastifyRequest,
  res: FastifyReply
) {
  try {
    console.log('GET /api/fruits - Fetching fruits list');
    const result = await getAllFruits();
    res.status(200).send(result);
  } catch (err) {
    console.error('Error in getFruitsHandler:', err);
    if (err instanceof AppError) {
      res.status(err.statusCode).send({ error: err.message });
    } else {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  }
}