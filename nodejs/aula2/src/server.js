require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('db connected');
    app.emit('pronto')
})
.catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flashmsg = require('connect-flash');
const routes = require('./routes');



app.use(express.static('./public'));

const sessionsOptions = session({
    secret:'secreteste',
    store: new MongoStore({mongooseConnection:mongoose.connection}),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000 * 60 * 60 * 24 * 7,
        httpOnly:true

    }
});

app.use(sessionsOptions);
app.use(flashmsg());
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(routes);

app.on('pronto', () => {
    app.listen(3333);

})
