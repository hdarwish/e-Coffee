import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductTypes = Object.freeze({
  COFFEE_MACHINE_LARGE: 'COFFEE_MACHINE_LARGE',
  COFFEE_MACHINE_SMALL: 'COFFEE_MACHINE_SMALL',
  ESPRESSO_MACHINE: 'ESPRESSO_MACHINE'
});

export const ProductModels = Object.freeze({
  BASE_MODEL: 'BASE_MODEL',
  PREMIUM_MODEL: 'PREMIUM_MODEL',
  DELUXE_MODEL: 'DELUXE_MODEL'
});

const WaterLineCompatibilities = Object.freeze({
  True: true,
  False: false
});
const CoffeeMahineSchema = new Schema({
  itemNumber: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    enum: Object.values(ProductTypes),
    required: true
  },
  productModel: {
    type: String,
    enum: Object.values(ProductModels),
    required: true
  },
  waterLineCompatible: {
    type: Boolean,
    enum: Object.values(WaterLineCompatibilities),
    required: true
  },
});

/**
 * assign the entities of the enums as a static object
 */
Object.assign(CoffeeMahineSchema.statics, {
  ProductTypes,
  ProductModels,
  WaterLineCompatibilities
});

export const CoffeeMachineModel = mongoose.model('coffeeMachine', CoffeeMahineSchema);