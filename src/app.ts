import express from 'express';
import productsController from './controllers/productsController';
import loginController from './controllers/loginController';
import ordersController from './controllers/ordersController';

const app = express();

app.use(express.json());

app.post('/products', productsController.addNewProduct);
app.get('/products', productsController.getAll);

app.post('/users', loginController.createLogin);

app.get('/orders', ordersController.getAll);

export default app;
