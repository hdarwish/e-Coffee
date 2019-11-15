import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * define enumerations as static properties,
 * using JS Style Guide for defining enumerations
 */
export const ProductTypes = Object.freeze({
  COFFEE_POD_LARGE: 'COFFEE_POD_LARGE',
  COFFEE_POD_SMALL: 'COFFEE_POD_SMALL',
  ESPRESSO_POD: 'ESPRESSO_POD'
});

/**
 * Coffee Flavors enumerations
 */
export const CoffeeFlavors = Object.freeze({
  COFFEE_FLAVOR_VANILLA: 'COFFEE_FLAVOR_VANILLA',
  COFFEE_FLAVOUR_CARAMEL: 'COFFEE_FLAVOUR_CARAMEL',
  COFFEE_FLAVOR_PSL: 'COFFEE_FLAVOR_PSL',
  COFFEE_FLAVOR_MOCHA: 'COFFEE_FLAVOR_MOCHA',
  COFFEE_FLAVOR_HAZELNUT: 'COFFEE_FLAVOR_HAZELNUT'
});

/**
 * Pack sizes enumerations
 */
export const PackSizes = Object.freeze({
  ONE_DOZEN: 'ONE_DOZEN',
  THREE_DOZEN: 'THREE_DOZEN',
  FIVE_DOZEN: 'FIVE_DOZEN',
  SEVEN_DOZEN: 'SEVEN_DOZEN'
})

const CoffeePodsSchema = new Schema({
  itemNumber: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    enum: Object.values(ProductTypes),
    required: true
  },
  coffeeFlavor: {
    type: String,
    enum: Object.values(CoffeeFlavors),
    required: true
  },
  packSize: {
    type: String,
    enum: Object.values(PackSizes),
    required: true
  }
});


/**
 * assign the entities of the enums as a static object
 */
Object.assign(CoffeePodsSchema.statics, {
  ProductTypes,
  CoffeeFlavors,
  PackSizes
});



export const CoffeePodsModel = mongoose.model('coffeePods', CoffeePodsSchema);