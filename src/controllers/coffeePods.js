import {
  CoffeePodsModel
} from '../schema/coffeePods';
import {
  success,
  failure
} from '../utilities/responseHandler';

export const getCoffeePodsByProductType = (req, res, next) => {
  CoffeePodsModel.find(req.params)
    .then(success(res, 200))
    .catch(failure(res, 400), next)
}

export const getCoffeePodsByFlavour = (req, res, next) => {
  CoffeePodsModel.find(req.params)
    .then(success(res, 200))
    .catch(failure(res, 400), next)
}

export const getCoffeeByPackSize = (req, res, next) => {
  CoffeePodsModel.find(req.params)
    .then(success(res, 200))
    .catch(failure(res, 400), next)
}
export const getCoffeePodsByParams = (req, res, next) => {
  CoffeePodsModel.find(req.params)
    .then(success(res, 200))
    .catch(failure(res, 400), next)
}