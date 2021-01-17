require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { credentials } = require('./config');
const addRoutes = require('./routes');
require('./db');

const app = express();
addRoutes(app);
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(cookieParser(credentials.cookieSecret));

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret,
}));

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
  });
} else {
  module.exports = app;
}
