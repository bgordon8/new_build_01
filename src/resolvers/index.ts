import Database from '../db';
const db = new Database();

export default {
  Query: {
    helloWorld: () => 'Hello World!',
    getAllUsers: () => {
      return db.getAllUsers();
    },
  },
};
