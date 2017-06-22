const express = require('express');
const app = express();

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

app.listen('3000', () => console.log('Example app listening on port 3000!'));