const express = require('express');
const handlers = require('./lib/handlers');

module.exports = (app) => {
  app.use(express.static(`${__dirname}/public`));

  app.get('/', handlers.home);

  app.get('/about', handlers.about);

  app.get('/topic', handlers.listTopics);

  app.get('/card', handlers.listCards);

  app.get('/account', handlers.account);

  app.use(handlers.notFound);

  app.use(handlers.serverError);
};
