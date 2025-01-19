import Postgres from 'pg';
import AlbumPlugin from './albums/index.js';
import AlbumService from '../services/postgre/AlbumService.js';
import AlbumValidator from './albums/validator.js';
import SongPlugin from './songs/index.js';
import SongService from '../services/postgre/SongService.js';
import SongValidator from './songs/validator.js';
import UserPlugin from './users/index.js';
import UserService from '../services/postgre/UserService.js';
import UserValidator from './users/validator.js';
import TokenService from '../services/tokenize/TokenService.js';
import AuthenticationPlugin from './authentications/index.js';
import AuthenticationService from '../services/postgre/AuthenticationService.js';
import AuthenticationValidator from './authentications/validator.js';

const pool = new Postgres.Pool();
const albumService = new AlbumService(pool);
const songService = new SongService(pool);
const userService = new UserService(pool);
const authenticationService = new AuthenticationService(pool);

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
  {
    plugin: UserPlugin,
    options: {
      service: userService,
      validator: UserValidator,
    },
  },
  {
    plugin: AuthenticationPlugin,
    options: {
      authenticationService,
      userService,
      validator: AuthenticationValidator,
      tokenManager: TokenService,
    },
  },
];
