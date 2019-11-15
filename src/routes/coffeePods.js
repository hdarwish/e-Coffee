import {
  Router
} from 'express';
import {
  getCoffeePodsByProductType,
  getCoffeePodsByFlavour,
  getCoffeeByPackSize,
  getCoffeePodsByParams
} from '../controllers/coffeePods';

const coffeePodsRouter = new Router();

coffeePodsRouter.get('/getCoffeePodsBy/type/:productType/flavor/:coffeeFlavor', getCoffeePodsByParams);
coffeePodsRouter.get('/getCoffeePodsBy/type/:productType', getCoffeePodsByProductType);
coffeePodsRouter.get('/getCoffeePodsBy/flavor/:coffeeFlavor', getCoffeePodsByFlavour);
coffeePodsRouter.get('/getCoffeePodsBy/size/:packSize', getCoffeeByPackSize);

export default coffeePodsRouter;