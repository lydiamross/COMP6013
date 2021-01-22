const express = require('express');
const handlers = require('./lib/handlers');

module.exports = (app) => {
  app.use(express.static(`${__dirname}/public`));

  /** UI Routes */
  app.get('/', handlers.home);
  app.get('/about', handlers.about);
  app.get('/topic', handlers.listTopics);
  app.get('/card', handlers.listCards);
  app.get('/account', handlers.account);

  /** API Routes */
  app.get('/api/cards', handlers.getCardsApi);
  app.get('/api/card/:_id', handlers.getCardByIdApi);
  app.get('/api/topics', handlers.getTopicsApi);
  app.get('/api/topics/:id', handlers.getTopicByIdApi);

  /** Error Routes */
  app.use(handlers.notFound);
  app.use(handlers.serverError);
};
