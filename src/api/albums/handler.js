export default class AlbumHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  async postAlbumHandler(request, h) {
    this._validator.validateAddAlbumPayload(request.payload);
    const { name, year } = request.payload;
    const albumId = await this._service.addAlbum({ name, year });

    const response = h.response({
      status: 'success',
      message: 'Album berhasil ditambahkan',
      data: {
        albumId,
      },
    });
    response.code(201);
    return response;
  }

  async getAlbumHandler(request, h) {
    const { id } = request.params;
    const album = await this._service.getAlbum(id);
    return h.response({
      status: 'success',
      data: { album },
    });
  }

  async putAlbumHandler(request, h) {
    this._validator.validateEditAlbumPayload(request.payload);
    const { id } = request.params;
    const { name, year } = request.payload;

    await this._service.editAlbum(id, { name, year });

    return h.response({
      status: 'success',
      message: 'Album berhasil diperbarui',
    });
  }

  async deleteAlbumHandler(request, h) {
    const { id } = request.params;
    await this._service.deleteAlbum(id);
    return h.response({
      status: 'success',
      message: 'Album berhasil dihapus',
    });
  }
}
