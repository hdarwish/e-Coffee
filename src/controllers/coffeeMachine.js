import {
  CoffeeMachineModel
} from '../schema/coffeeMachine';
import {
  success,
  failure
} from '../utilities/responseHandler';

export const getCoffeeMachineByProductType = (req, res, next) => {
  CoffeeMachineModel.find(req.params)
    .then(success(res))
    .catch(failure(res, 400), next)
}
export const getCoffeeMachineByWaterLine = (req, res, next) => {
  CoffeeMachineModel.find(req.params)
    .then(success(res))
    .catch(failure(res, 400), next)
}

export const createCoffeeMachine = (req, res, next) => {
  let coffeeMachineInfo = {
    itemNumber: req.body.itemNumber,
    product_type: req.body.product_type,
    water_line_compatible: true
  };
  CoffeeMachineModel.create(coffeeMachineInfo)
    .then(success(res, 201))
    .catch(failure(res, 400), next)
}