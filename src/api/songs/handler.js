export default class SongHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postSongHandler(request, h) {
    this._validator.validateAddSongPayload(request.payload);
    const { title, year, genre, performer, duration, albumId } =
      request.payload;
    const songId = await this._service.addSong({
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    });

    const response = h.response({
      status: 'success',
      message: 'Song berhasil ditambahkan',
      data: {
        songId,
      },
    });
    response.code(201);
    return response;
  }

  async getSongsHandler(request, h) {
    const { title, performer } = request.query;
    const songs = await this._service.getSongs({ title, performer });
    return h.response({
      status: 'success',
      data: { songs },
    });
  }

  async getSongHandler(request, h) {
    const { id } = request.params;
    const song = await this._service.getSong(id);
    return h.response({
      status: 'success',
      data: { song },
    });
  }

  async putSongHandler(request, h) {
    this._validator.validateEditSongPayload(request.payload);
    const { id } = request.params;
    const { title, year, genre, performer, duration, albumId } =
      request.payload;

    await this._service.editSong(id, {
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    });

    return h.response({
      status: 'success',
      message: 'Song berhasil diperbarui',
    });
  }

  async deleteSongHandler(request, h) {
    const { id } = request.params;
    await this._service.deleteSong(id);
    return h.response({
      status: 'success',
      message: 'Song berhasil dihapus',
    });
  }
}
