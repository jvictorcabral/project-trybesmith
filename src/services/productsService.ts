import productsModel from '../models/productsModel';

const addNewProduct = async (name: string, amount: string) => {
  const newProducts = await productsModel.addNewProduct(name, amount);

  return newProducts;
};

export default {
  addNewProduct,
};