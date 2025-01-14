import 'dotenv/config';
import Hapi from '@hapi/hapi';

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

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return JSON.stringify({ message: 'Hello World' });
    },
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
