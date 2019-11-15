import {
  Router
} from 'express';
import {
  createCoffeeMachine,
  getCoffeeMachineByProductType,
  getCoffeeMachineByWaterLine
} from '../controllers/coffeeMachine';

const coffeeMachineRouter = new Router();

coffeeMachineRouter.post('/createCoffeeMachine', createCoffeeMachine);
coffeeMachineRouter.get('/getByProductType/:productType', getCoffeeMachineByProductType);
coffeeMachineRouter.get('/getByWaterline/:waterLineCompatible', getCoffeeMachineByWaterLine)

export default coffeeMachineRouter;