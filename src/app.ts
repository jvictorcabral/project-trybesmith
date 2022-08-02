import express from 'express';
import productsController from './controllers/productsController';
import loginController from './controllers/loginController';

const app = express();

app.use(express.json());

app.post('/products', productsController.addNewProduct);
app.get('/products', productsController.getAll);

app.post('/users', loginController.createLogin);

export default app;
