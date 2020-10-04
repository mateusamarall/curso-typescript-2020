require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('db connected');
    app.emit('pronto')
})
    .catch(e => console.log(e));


app.use(express.static('./public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);

app.on('pronto', () => {
    app.listen(3333);

})
