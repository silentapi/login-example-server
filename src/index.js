'use strict';

import {config} from './config/index';
import mongoose from 'mongoose';
import express from 'express';

console.log(`You are running in a ${config.server.env} environment.`);

// Connect to database
mongoose.connect(config.server.mongoUri, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Initialize express app and router
const app = new express();
const router = new express.Router();

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
