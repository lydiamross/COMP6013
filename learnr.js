require('dotenv').config();
const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handlers');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/public`));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.get('/topic', handlers.topic);

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
