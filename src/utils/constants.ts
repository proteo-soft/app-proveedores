import { randomUUID } from 'node:crypto';

const PORT = Number(process.env.PORT) || 63009;

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';

const DB_URL = process.env.DB_URL || null;

const PEPPER = 'lalalallalala';

const isDevEnvironment = () => ENVIRONMENT === 'development';

export { PORT, DB_URL, PEPPER, isDevEnvironment };
