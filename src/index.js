'use strict';

import {config} from './config/index';
import mongoose from 'mongoose';

// Connect to database
mongoose.connect(config.server.mongoUri, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log(`You are running in a ${config.server.env} environment.`);
