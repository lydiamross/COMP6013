require('dotenv').config();
const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const addRoutes = require('./routes');

const port = process.env.PORT || 8080;

const app = express();
const connection = connect();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

addRoutes(app);

module.exports = {
  app,
  connection
};

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
}

function connect() {
  mongoose.connect(process.env.MONGO_URL, { keepAlive: 1, useNewUrlParser: true });
  return mongoose.connection;
}
