const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato');
})

app.listen(3333);