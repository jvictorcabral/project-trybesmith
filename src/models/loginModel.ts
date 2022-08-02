import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createLogin = async (username: string, classe: string, level:
number, password: string) => {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?,?,?,?)`,
    [username, classe, level, password],
  );

  const newLogin = {
    id: insertId,
    username,
    classe,
    level,
    password,
  };

  return newLogin;
};

export default {
  createLogin,
};
