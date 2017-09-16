## How to Run From Source (React)

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/)
2. Install Yarn: ```npm install -g yarn```
3. Clone the repository
4. Install server dependencies
    1. Navigate to root directory
    2. run command: ```yarn install```
5. Install client dependencies
    1. Navigate to client directory
    2. run command: ```yarn install```

### Development Workflow
* To run both server and client, run the command: ```npm run dev``` from the project root directory
* To run just the client, run the command: ```npm run client```
* To run just the server, run the command: ```npm run server```
* To run the tests, run the command: ```npm test```

### Git Workflow and Deployment
* Heroku deploys the master branch automatically to https://civin.herokuapp.com/
* Therefore, master will be the release branch
* Please branch from develop to create your feature and merge back into develop when you're done
* Develop will be merged into master when we are ready to release
* Travis CI runs automatically on commit: https://travis-ci.org/davidRoussov/civin

### Technology Stack
* React + Redux frontend
* Node Express backend
* Mocha + Chai + Sinon testing
* Travis CI
* Remote Postgres database (ElephantSQL)

## How to Run From Source (React-Native)

## Feature List
* Virtual Tour 
* Renter & Owner Ratings
* Chat Bot
