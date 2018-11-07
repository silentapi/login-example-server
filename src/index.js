'use strict';

import {config} from './config/index';
import mongoose from 'mongoose';
import Express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

console.log(`You are running in a ${config.server.env} environment.`);

// Connect to database
mongoose.connect(config.server.mongoUri, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initialize express app and router
const app = new Express();
const router = new Express.Router();

// Use x-www-form-urlencoded and json parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Use morgan to log incoming requests
app.use(logger('dev'));

// Sample API endpoint
router.route('/*')
    .get((req, res) => {
      res.json({
        message: 'Hello World!',
      });
    });

app.use('/api', router);

// Start express app
app.listen(config.server.port, () => {
  console.log(`Listening on port ${config.server.port}`);
});
