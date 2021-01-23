require('dotenv').config();
const express = require('express');
const addRoutes = require('./routes');
require('./db');

const app = express();
addRoutes(app);
const port = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
  });
} else {
  module.exports = app;
}
