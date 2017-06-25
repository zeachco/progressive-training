const express = require('express'); // simple http framework
const bodyParser = require('body-parser'); // middleware help parsing requests
const morgan = require('morgan'); // http logger
const uuid = require('uuid'); // unique id generators
const app = express();
const data = {}; // this replace our database for educationnal purposes

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    res.json(data);
});

app.post('/api', (req, res) => {
    const id = uuid.v1();
    data[id] = req.body
    res.json(data[id]);
});

app.put('/api/:id', (req, res) => {
    if (!data[id]) throw new Error(`cannot find data with id ${id}!`);
    data[id] = req.body;
    res.json(data[id]);
});

app.patch('/api/:id', (req, res) => {
    if (!data[id]) throw new Error(`cannot find data with id ${id}!`);
    data[id] = Object(data[id], req.body);
    res.json(data[id]);
});

app.delete('/api/:id', (req, res) => {
    if (!data[id]) throw new Error(`cannot find data with id ${id}!`);
    delete data[id];
    res.status(201);
    res.end();
});

app.listen(3000);
