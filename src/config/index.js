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
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI,
  },
};
