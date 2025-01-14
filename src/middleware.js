import ClientError from './exceptions/ClientError.js';

const handleErrorIntercept = (req, h) => {
  const { response } = req;

  if (response instanceof ClientError) {
    const newResponse = h
      .response({
        status: 'fail',
        message: response.message,
      })
      .code(response.statusCode);

    return newResponse;
  }

  return h.continue;
};

const middleware = { handleErrorIntercept };

export default middleware;
