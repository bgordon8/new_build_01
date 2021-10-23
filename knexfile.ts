import path from 'path';

const defaultOptions = {
  client: 'pg',
  connection: {
    database: 'new_build_01',
    host: 'localhost',
    port: 5432,
    user: '',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds'),
  },
};

export default {
  development: config({
    connection: {
      database: 'new_build_01',
    },
  }),
  test: config({
    connection: {
      database: 'new_build_01_test',
    },
  }),
  production: {
    connection: {
      database: '',
    },
  },
} as { [key: string]: object };

function config(overides: any) {
  return Object.assign({}, defaultOptions, overides);
}
