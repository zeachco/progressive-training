let express = require('express');
let app = express();
let path = require('path');
let serveStatic = require('serve-static');
let morgan = require('morgan');
let bodyParser = require('body-parser');

let data = [
  {
    "id" : 1,
    "name": "Ammar",
    "role": "Developer"
  },
  {
    "id" : 2,
    "name": "Huzefa",
    "role": "Manager"
  },
  {
    "id" : 3,
    "name": "Ayush",
    "role": "Tester"
  }
]

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'));

app.get('/api/times', (req, res) => {
    res.json(data);
})


app.post('/api/times', (req, res) => {
    let length = (data.length) - 1;
    let newId = (data[length]['id']) + 1;
    let newData = req['body'];
    newData['id'] = newId;
    data.push(newData);
    res.status(201);
    res.send();
    
})

app.put('/api/times', (req, res) => {
    let id = req.query.id;
    let isIdPresent = false;
    for(let index=0; index < data.length; index++){
        if(id == data[index]['id']) {
           isIdPresent = true;
           data[index]['name'] = req.query.name;
           res.send('Updated Succesffully !');
        }
    }

    if(!isIdPresent) {
        res.send('No data present');
    }
})

app.delete('/api/times/:id', (req, res) => {
    let id = req.params.id;
    for(let index=0; index< data.length; index++) {
        if(id == data[index]['id']) {
            data.splice(index, 1);
        }
    }
    res.status(201);
    res.send();
})

app.use(serveStatic(path.join(__dirname, '../client/build')));

app.listen('8080', () => console.log('Example app listening on port 8080!'));