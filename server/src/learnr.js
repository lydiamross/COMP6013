require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const addRoutes = require('./routes');
require('./db');

const app = express();
addRoutes(app);
const port = process.env.PORT || 3000;

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
}));

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
  });
} else {
  module.exports = app;
}
