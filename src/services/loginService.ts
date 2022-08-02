import jwt from 'jsonwebtoken';
import loginModel from '../models/loginModel';

const secret = 'secret';

const createLogin = async (username: string, classe: string, level:
number, password: string) => {
  await loginModel.createLogin(username, classe, level, password);

  const token = jwt.sign({ username, classe, level, password }, secret);

  return token;
};

export default {
  createLogin,
};