import { Router } from 'express';
import userRouter from './users.routes';

const Routes = Router();

Routes.use('/users', userRouter);

export default Routes;
