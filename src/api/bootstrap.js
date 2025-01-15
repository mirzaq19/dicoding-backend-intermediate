import Postgres from 'pg';
import AlbumPlugin from './albums/index.js';
import AlbumService from '../services/postgre/AlbumService.js';
import AlbumValidator from './albums/validator.js';
import SongPlugin from './songs/index.js'; 
import SongService from '../services/postgre/SongService.js';
import SongValidator from './songs/validator.js';

const pool = new Postgres.Pool();
const albumService = new AlbumService(pool);
const songService = new SongService(pool);

export default [
  {
    plugin: AlbumPlugin,
    options: {
      service: albumService,
      validator: AlbumValidator,
    },
  },
  {
    plugin: SongPlugin,
    options: {
      service: songService,
      validator: SongValidator,
    },
  },
];
