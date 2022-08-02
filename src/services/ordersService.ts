import ordersModel from '../models/ordersModel';

const getAll = async () => {
  const getOrders = await ordersModel.getAll();

  return getOrders;
};

export default {
  getAll,
};