import RoutesUsers from '@modules/users/infra/http/routes/routes';
import { Router } from 'express';

const routes = Router();

routes.use(RoutesUsers);

export default routes;
