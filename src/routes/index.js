import {
  Router
} from 'express';
import coffeeMachineRouter from './coffeeMachine';
import coffeePodsRouter from './coffeePods';

const router = new Router();

router.use('/coffeeMachine', coffeeMachineRouter);
router.use('/coffeePods', coffeePodsRouter);

export default router;