const express = require('express'); // simple http framework
const bodyParser = require('body-parser'); // middleware help parsing requests
const morgan = require('morgan'); // http logger
const uuid = require('uuid'); // unique id generators
const app = express();
const MongoClient = require('mongodb').MongoClient
//const data = {}; // this replace our database for educationnal purposes
var database;

//===========================================================================
//database connection Test
//mongodb://localhost:27017/db
MongoClient.connect('mongodb://abhawsar:password@ds139322.mlab.com:39322/ayushbhawsar_test_db', function (err, db) {
    database = db;
    if (err) throw err

    db.collection('times').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })
})
//===========================================================================

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/api/times', (req, res) => {
    database.collection('times').find().toArray(function (err, result) {
        if (err) throw err
        //console.log(result);
        res.json(result);
    })
});

app.get('/api/times/:id', (req, res) => {
    database.collection('times').find({ id: req.params.id }).toArray(function (err, result) {
        if (err) throw err
        //console.log(result);
        res.json(result);
    })
});

app.post('/api/times', (req, res) => {
    database.collection('times').insertOne({
        id: uuid.v1(),
        time: new Date()
    })
        .then(function (result) {
            res.json(result);
        })
});

app.put('/api/times/:id', (req, res) => {
    //const id = req.params.id;
    database.collection('times').updateOne(
        { id: req.param.id },
        {
            $set: { time: new Date() },
            $currentDate: { lastModified: true }
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err)
        });
});

app.patch('/api/times/:id', (req, res) => {
    const id = req.params.id;
    if (!data[id]) throw new Error(`cannot find data with id ${id}!`);
    data[id] = Object.assign(data[id], req.body);
    res.json(data[id]);
});

app.delete('/api/times/:id', (req, res) => {
    const id = req.params.id;
    database.collection('times').deleteOne({
        id: req.param.id
    })
        .then(function (result) {
            console.log(result);
            res.status(201);
            res.end();
        })
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
