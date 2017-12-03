const R = require('ramda');
const express = require('express');
const bodyParser = require('body-parser');
const store = require('./src/store/index');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/s/*', (req, res) => {
    const short = R.replace('/s/', '', req.originalUrl);
    const { original } = store.read(short) || {};
    if (!original) {
        return res.send('no such url in my mind')
    }
    return res.redirect(original);
});

app.post('/create', (req, res) => {
    console.log(req.body);
    return res.json(store.create(req.body.original))
});

app.listen(3001, () => {console.log('listening on 3001')});
