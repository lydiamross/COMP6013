/* eslint-disable consistent-return */
const catchErrors = (handler) => async (request, response) => {
  try {
    await handler(request, response);
  } catch (error) {
    return response
      .status(500)
      .send({
        error,
      });
  }
};

exports.catchErrors = catchErrors;
