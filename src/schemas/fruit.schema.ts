import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const getFruitsResponseZod = z.object({
  fruits: z.array(z.string()),
  count: z.number(),
});

export const getFruitsSchema = {
  response: {
    200: zodToJsonSchema(getFruitsResponseZod),
  },
};