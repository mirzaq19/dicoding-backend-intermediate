import Postgres from 'pg';
import AlbumPlugin from './albums/index.js';
import AlbumService from '../services/postgre/AlbumService.js';
import AlbumValidator from './albums/validator.js';

const pool = new Postgres.Pool();
const albumService = new AlbumService(pool);

export default [
  {
    plugin: AlbumPlugin,
    options: {
      service: albumService,
      validator: AlbumValidator,
    },
  },
];
