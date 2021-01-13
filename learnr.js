require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const handlers = require('./lib/handlers');
const { credentials } = require('./config');
require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/public`));

app.use(cookieParser(credentials.cookieSecret));

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret,
}));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.get('/topic', handlers.listTopics);

app.get('/account', handlers.account);

app.use(handlers.notFound);

app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
  });
} else {
  module.exports = app;
}
