import { Request, Response } from 'express';
import productsService from '../services/productsService';

const addNewProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProducts = await productsService.addNewProduct(name, amount);

  return res.status(201).json(newProducts);
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productsService.getAll();

  return res.status(200).json(products);
};

export default {
  addNewProduct,
  getAll,
};