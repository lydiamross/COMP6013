require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const port = process.env.PORT || 443;

const app = express();

function connect() {
  mongoose.connect(process.env.MONGO_URL, { keepAlive: 1, useNewUrlParser: true });
  return mongoose.connection;
}

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
}

const connection = connect();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
}

app.use('/api', apiRoutes);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use((err, req, res, next) => res.status(500).send(err));

module.exports = {
  app,
  connection
};

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
