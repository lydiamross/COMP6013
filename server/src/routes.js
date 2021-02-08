const express = require('express');
const bodyParser = require('body-parser')
const handlers = require('./lib/handlers');

module.exports = (app) => {
  app.use(express.static(`${__dirname}/public`));
  app.use(bodyParser.json());

  /** API Routes */
  app.get('/api/cards', handlers.getCardsApi);
  app.get('/api/cards/:topicId', handlers.getCardsByTopicIdApi);
  app.get('/api/topics', handlers.getTopicsApi);
  app.get('/api/topics/:id', handlers.getTopicByIdApi);
  app.post('/api/topics', handlers.postTopicsApi);
  app.post('/api/cards', handlers.postCardsApi);
  app.put('/api/topics', handlers.putTopicApi);
  app.put('/api/cards', handlers.putCardApi);
  app.delete('/api/cards/:id', handlers.deleteCardApi);
  app.delete('/api/topics/:id', handlers.deleteTopicApi);

  /** Error Routes */
  app.use(handlers.notFound);
  app.use(handlers.serverError);
};
