# swenson-he-e-Coffee-challenge

Swenson HE BackEnd Challenge

# Installation Instructions

To get this backEnd up and running, do the following:

- run `npm install`
- create a file `.env` on the root directly, containing the list below
  - MONGODB_URL={MONGODB_URL_YOU_WANT_TO_USE}
  - MONGO_DATABASE_NAME={DATABASE_NAME_YOU_WANT_TO_USE}
  - ENVIRONMENT= `production` || `development`
  - COFFEE_MACHINE_SCRIPT_LOADED=false
  - COFFEE_PODS_SCRIPT_LOADED=false
- After you have provided the environment variable details, run this command,
  - `npm run dev`
  - when the server starts up, it will create the`coffeeMachines` and `cofffeePods` collections.
  - confirm they were created, by checking your database.
  - if collections were created, stop the server with `ctrl+c`, and change the following environment variables;
    - COFFEE_MACHINE_SCRIPT_LOADED=true
    - COFFEE_PODS_SCRIPT_LOADED=true
  - afterwards, restart the server with `npm run dev`

# API DOcumentation:

Coffee Machines:
| verb | path | desc |
| ------------- | ------------- |------------- |
| get | /getByProductType/:productType | get machines by type only |
| get | /getByWaterline/:waterLineCompatible | get machines by water line compatibility only |
| post | /createCoffeeMachine | create new coffee machine |

Coffee Pods:
| verb | path | desc |
| ------------- | ------------- |------------- |
| get | /getCoffeePodsBy/type/:productType | get Pod by type only |
| get | /getCoffeePodsBy/flavor/:coffeeFlavor | get Pod by flavor only |
| get | /getCoffeePodsBy/size/:packSize | get Pod by pack size only |
| get | /getCoffeePodsBy/type/:productType/flavor/:coffeeFlavor | get Pod by type and flavor only |

# Running Tests

To run test, enter the command below:
`npm run test`
