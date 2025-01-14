import 'dotenv/config';
import Hapi from '@hapi/hapi';
import bootstrapApi from './api/bootstrap.js';

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(bootstrapApi);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
