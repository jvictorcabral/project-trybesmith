import { Request, Response } from 'express';
import loginService from '../services/loginService';

const createLogin = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;
  const newLogin = await loginService.createLogin(username, classe, level, password);

  return res.status(201).json({ token: newLogin });
};

export default {
  createLogin,
};