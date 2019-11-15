    import dotenv from 'dotenv';
    import {
      CoffeeMachineModel
    } from '../schema/coffeeMachine';
    import {
      CoffeePodsModel
    } from '../schema/coffeePods';
    import {
      getCoffeeMachineData
    } from './insertCoffeeMachines';
    import {
      getCoffeePodsData
    } from './insertCoffeePods';
    dotenv.config();

    export const checkCoffeeMachineDataIsLoaded = () => {
      if (process.env.COFFEE_MACHINE_SCRIPT_LOADED === "false") {
        CoffeeMachineModel.insertMany(getCoffeeMachineData())
          .then((coffeeMachines) => {
            console.log("inserted", coffeeMachines)
          }).catch((error) => {
            console.log("error", error)
          })
      }
      return null;
    }

    export const checkCoffeePodDataIsLoaded = () => {
      if (process.env.COFFEE_PODS_SCRIPT_LOADED === "false") {
        CoffeePodsModel.insertMany(getCoffeePodsData())
          .then((coffeePods) => {
            console.log("inserted", coffeePods)
          }).catch((error) => {
            console.log("error", error)
          })
      }
      return null
    }