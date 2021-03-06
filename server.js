require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const createError = require('http-errors');
const mongoose = require('mongoose');
const apiRoutes = require('./server/routes');

const port = process.env.PORT || 443;

const app = express();

function listen() {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
}

function connect() {
  mongoose.connect(process.env.MONGO_URL, {
    keepAlive: 1,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  return mongoose.connection;
}

const connection = connect();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(bodyParser.json({ limit: '100kb' }));

app.use('/api', apiRoutes);

app.use((request, response, next) => {
  next(createError(404));
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => response.status(500).send(error));

module.exports = {
  app,
  connection
};

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);
