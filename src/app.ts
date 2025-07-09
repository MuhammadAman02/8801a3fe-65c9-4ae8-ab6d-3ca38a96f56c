import Fastify from 'fastify';
import { fruitRoutes } from './routes/fruit.route';
import { AppError } from './utils/AppError';

export function createApp() {
  const app = Fastify({
    logger: {
      level: 'info',
    },
  });

  // Global error handler
  app.setErrorHandler((error, request, reply) => {
    console.error('Global error handler:', error);
    
    if (error instanceof AppError) {
      reply.status(error.statusCode).send({ error: error.message });
    } else {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });

  // Register routes with /api prefix
  app.register(async function (app) {
    await app.register(fruitRoutes);
  }, { prefix: '/api' });

  return app;
}