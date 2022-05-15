import config from 'config';

export const PORT = config.get('port') as number;
export const DB_USER = config.get('db-user') as string;
export const DB_PASSWORD = config.get('db-password') as string;
export const DB_NAME = config.get('db-name') as string;
