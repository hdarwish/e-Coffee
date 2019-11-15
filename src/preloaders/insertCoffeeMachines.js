import fs from 'fs';

import {
  ProductTypes,
  ProductModels
} from '../schema/coffeeMachine'

export const getTypeFromEnum = (typeName) => {
  switch (typeName) {
    case 'small machine':
      return ProductTypes.COFFEE_MACHINE_SMALL;
    case 'large machine':
      return ProductTypes.COFFEE_MACHINE_LARGE;
    case 'espresso machine':
      return ProductTypes.ESPRESSO_MACHINE;
    default:
      return ProductTypes.COFFEE_MACHINE_SMALL;
  }
}
export const getModelFromEnum = (modelName) => {
  switch (modelName) {
    case 'base model':
      return ProductModels.BASE_MODEL;
    case 'premium model':
      return ProductModels.PREMIUM_MODEL;
    case 'deluxe model':
      return ProductModels.DELUXE_MODEL;
    default:
      return ProductModels.BASE_MODEL;
  }
}

export const getCoffeeMachineData = () => {
  try {
    const coffeeMachineData = []
    let data = fs.readFileSync(process.cwd() + '/src/preloaders/testData/coffeeMachines.txt', 'utf8');
    let lines = data.split(/\r?\n/)
    lines.map((items) => {
      const seperateItemNo = items.split(" – ");
      const itemNumber = seperateItemNo[0];
      const seperateRest = seperateItemNo[1].split(", ");
      const productType = getTypeFromEnum(seperateRest[0]);
      const productModel = getModelFromEnum(seperateRest[1]);
      const waterLineCompatible = seperateRest.length > 2 ? true : false;
      coffeeMachineData.push({
        itemNumber,
        productType,
        productModel,
        waterLineCompatible
      })
    })
    return coffeeMachineData
  } catch (e) {
    console.log("error", e)
  }

}