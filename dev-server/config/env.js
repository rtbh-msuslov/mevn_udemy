import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app 
 */
export function setEnvironment(app) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

/**
 * Used to set development environment variables
 * @param {Express App} app 
 */
function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  app.use(bodyParser.json()); // Allows parsing JSON from the client
  app.use(morgan('dev')); // Log HTTP Requests to the node console (for debugging purposes)
  app.use(cors()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
  // Connection string from the local MongoDB/Compass - port 27017 is used by default
  // Can look like this: 'mongodb://localhost:27017/vue-db'
  process.env.DB_URL = 'YOUR MONGODB CONNECTION STRING FROM THE LOCAL DB';
  process.env.TOKEN_SECRET = 'YOUR SRONG SECRET STRING HASH';
}

/**
 * Used to set production environment variables
 * @param {Express App} app
 */
function setProdEnv(app) {
  process.env.NODE_ENV = 'production';
  process.env.DB_URL = 'YOUR MONGODB CONNECTION STRING FROM THE REAL DB';
  process.env.TOKEN_SECRET = 'YOUR ANOTHER SECRET STRING';
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../dist'));
}
