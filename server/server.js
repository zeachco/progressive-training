let express = require('express');
let app = express();
let path = require('path');
let serveStatic = require('serve-static');
let morgan = require('morgan');


// app.use(morgan(':id :method :url :response-time'));
app.use(morgan('dev'));

app.get('/api/times/get', (request, response) => {
    response.send('Executing GET request !');
})


app.post('/api/times/post', (request, response) => {
    response.send('Executing POST request !');
})

app.put('/api/times/put', (request, response) => {
    response.send('Executing PUT request !');
})

app.delete('/api/times/delete', (request, response) => {
    response.send('Executing DELETE request !');
})

app.use(serveStatic(path.join(__dirname, '../client/build')));

//app.use(morgan('dev'));
app.listen('8080', () => console.log('Example app listening on port 8080!'));