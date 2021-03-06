import { Knex } from 'knex';
import { v4 as uuid } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: uuid(),
      email: 'brian@email.com',
      username: 'brian',
      password: 'password123',
    },
  ]);
}
