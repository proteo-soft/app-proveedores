import { scryptSync, randomUUID } from 'node:crypto';
import { PEPPER } from './constants';

const genSalt = () => randomUUID();

const verifyPassword = (storedPassword: string, incomingPassword: string) => {
  return storedPassword === incomingPassword;
};

const createHash = (salt: string, password: string) => {
  const hashedPassword = scryptSync(password, salt + PEPPER, 45);

  return `${salt}:${hashedPassword.toString('hex')}`;
};

export { createHash, verifyPassword, genSalt };
