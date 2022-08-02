import productsModel from '../models/productsModel';

const addNewProduct = async (name: string, amount: string) => {
  const newProducts = await productsModel.addNewProduct(name, amount);

  return newProducts;
};

const getAll = async () => {
  const products = await productsModel.getAll();

  return products;
};

export default {
  addNewProduct,
  getAll,
};