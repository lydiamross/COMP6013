require('dotenv').config();

const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use(express.static(__dirname + '/public'))

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    console.error(`Error - ${err.message}`);
    res.status(500);
    res.render('500');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
});
