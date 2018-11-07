'use strict';

import 'dotenv/config';

// Required environment variables
[
  'NODE_ENV',
  'MONGO_URI',
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

export const config = {
  server: {
    env: process.env.NODE_ENV,
    mongoUri: process.env.MONGO_URI,
  },
};
