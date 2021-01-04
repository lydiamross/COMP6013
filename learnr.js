require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.use((err, req, res, next) => {
    console.error(`Error - ${err.message}`);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}, press Ctrl-C to terminate...`);
});
