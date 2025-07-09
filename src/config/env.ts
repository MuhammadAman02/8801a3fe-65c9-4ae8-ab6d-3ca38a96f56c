import { envsafe, str, port } from 'envsafe';
import dotenv from 'dotenv';

dotenv.config();

export const env = envsafe({
  NODE_ENV: str({ default: 'development' }),
  PORT: port({ default: 3000 }),
  DATABASE_URL: str({ default: 'postgresql://user:password@localhost:5432/fruits_db' }),
});