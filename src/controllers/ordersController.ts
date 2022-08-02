import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response) => {
  const getOrders = await ordersService.getAll();

  return res.status(200).json(getOrders);
};

export default {
  getAll,
};