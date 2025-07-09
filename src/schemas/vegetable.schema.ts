import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

// Zod schemas
const createVegetableZod = z.object({
  name: z.string().min(1),
  color: z.string().min(1),
  price: z.number().positive(),
  season: z.string().optional(),
  organic: z.boolean().default(false),
});

const updateVegetableZod = z.object({
  name: z.string().min(1).optional(),
  color: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  season: z.string().optional(),
  organic: z.boolean().optional(),
});

const vegetableResponseZod = z.object({
  id: z.string().uuid(),
  name: z.string(),
  color: z.string(),
  price: z.number(),
  season: z.string().nullable(),
  organic: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const getVegetablesQueryZod = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  organic: z.coerce.boolean().optional(),
  season: z.string().optional(),
});

// Export Fastify-compatible JSON schemas
export const createVegetableSchema = {
  body: zodToJsonSchema(createVegetableZod),
  response: {
    201: zodToJsonSchema(vegetableResponseZod),
  },
};

export const getVegetablesSchema = {
  querystring: zodToJsonSchema(getVegetablesQueryZod),
  response: {
    200: zodToJsonSchema(z.array(vegetableResponseZod)),
  },
};

export const getVegetableByIdSchema = {
  params: zodToJsonSchema(z.object({ id: z.string().uuid() })),
  response: {
    200: zodToJsonSchema(vegetableResponseZod),
  },
};

export const updateVegetableSchema = {
  params: zodToJsonSchema(z.object({ id: z.string().uuid() })),
  body: zodToJsonSchema(updateVegetableZod),
  response: {
    200: zodToJsonSchema(vegetableResponseZod),
  },
};

export const deleteVegetableSchema = {
  params: zodToJsonSchema(z.object({ id: z.string().uuid() })),
  response: {
    204: z.null(),
  },
};