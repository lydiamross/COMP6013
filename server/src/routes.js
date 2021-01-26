const express = require('express');
const handlers = require('./lib/handlers');

module.exports = (app) => {
  app.use(express.static(`${__dirname}/public`));

  /** API Routes */
  app.get('/api/cards', handlers.getCardsApi);
  app.get('/api/card/:_id', handlers.getCardByIdApi);
  app.get('/api/topics', handlers.getTopicsApi);
  app.get('/api/topics/:id', handlers.getTopicByIdApi);

  /** Error Routes */
  app.use(handlers.notFound);
  app.use(handlers.serverError);
};
