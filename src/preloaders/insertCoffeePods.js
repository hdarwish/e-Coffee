import {
  readFileSync
} from 'fs';
import {
  ProductTypes,
  CoffeeFlavors,
  PackSizes
} from '../schema/coffeePods'

export const getTypeFromEnum = (typeName) => {
  switch (typeName) {
    case 'small coffee pod':
      return ProductTypes.COFFEE_POD_SMALL;
    case 'large coffee pod':
      return ProductTypes.COFFEE_POD_LARGE;
    case 'espresso pod':
      return ProductTypes.ESPRESSO_POD;
    default:
      return ProductTypes.COFFEE_POD_SMALL;
  }
}
export const getSizeFromEnum = (sizeName) => {
  switch (sizeName) {
    case '1 dozen':
      return PackSizes.ONE_DOZEN;
    case '3 dozen':
      return PackSizes.THREE_DOZEN;
    case '5 dozen':
      return PackSizes.FIVE_DOZEN;
    case '7 dozen':
      return PackSizes.SEVEN_DOZEN;
    default:
      return PackSizes.ONE_DOZEN;
  }
}
export const getFlavorFromEnum = (flavorName) => {
  switch (flavorName) {
    case 'vanilla':
      return CoffeeFlavors.COFFEE_FLAVOR_VANILLA;
    case 'caramel':
      return CoffeeFlavors.COFFEE_FLAVOUR_CARAMEL;
    case 'psl':
      return CoffeeFlavors.COFFEE_FLAVOR_PSL;
    case 'mocha':
      return CoffeeFlavors.COFFEE_FLAVOR_MOCHA;
    case 'hazelnut':
      return CoffeeFlavors.COFFEE_FLAVOR_HAZELNUT;
    default:
      return CoffeeFlavors.COFFEE_FLAVOR_VANILLA;
  }
}
export const getCoffeePodsData = () => {
  try {
    const coffeePods = [];
    let data = readFileSync(process.cwd() + '/src/preloaders/testData/coffeePods.txt', 'utf8')
    let lines = data.split(/\r?\n/)
    lines.map((items) => { //CP001 – small coffee pod, 1 dozen, vanilla
      const seperateItemNo = items.split(" – ");
      const itemNumber = seperateItemNo[0];
      const seperateRest = seperateItemNo[1].split(", ");
      const productType = getTypeFromEnum(seperateRest[0]);
      const packSize = getSizeFromEnum(seperateRest[1]);
      const coffeeFlavor = getFlavorFromEnum(seperateRest[2]);
      coffeePods.push({
        itemNumber,
        productType,
        packSize,
        coffeeFlavor
      })
    })
    return coffeePods;
  } catch (ex) {
    console.log("error", ex)
  }
}