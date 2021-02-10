const catchErrors = handler =>
  async (request, response) => {
    try {
      await handler(request, response);
    } catch (error) {
      return response
        .status(500)
        .send({
          errorId,
          message: err.message
        });
    };
  };

exports.catchErrors = catchErrors;