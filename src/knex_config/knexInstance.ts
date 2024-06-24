import * as dotenv from 'dotenv';
import { Knex, knex } from 'knex';
dotenv.config();

export const db: Knex = require('knex')({
    client: process.env.CLIENT_DB,
    connection: {
      host: process.env.HOST_DB,
      port: process.env.PORT_DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE_NAME,
    },
    useNullAsDefault: true,
  });

