import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const addNewProduct = async (name: string, amount: string) => {
  const [{ insertId }] = await connection.query<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.Products (name, amount)
      VALUES (?, ?)`,
    [name, amount],
  );

  const newProduct = {
    id: insertId,
    name,
    amount,
  };

  return newProduct;
};

export default {
  addNewProduct,
};