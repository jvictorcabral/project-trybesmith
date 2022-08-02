import { Request, Response } from 'express';
import productsService from '../services/productsService';

const addNewProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProducts = await productsService.addNewProduct(name, amount);

  return res.status(201).json(newProducts);
};

export default {
  addNewProduct,
};