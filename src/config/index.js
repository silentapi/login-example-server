'use strict';

import 'dotenv/config';

// Required environment variables
[
  'NODE_ENV'
].forEach((name) => {
  if (!process.env[name]) {
    throw new Error(`Environment variable ${name} is missing`);
  }
});

export const config = {
  server: {
    env: process.env.NODE_ENV
  }
};
