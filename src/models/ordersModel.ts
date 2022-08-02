import connection from './connection';

const getAll = async () => {
  const [getOrders] = await connection.query(
    `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId
    `,
  );

  return getOrders;
};

export default {
  getAll,
};