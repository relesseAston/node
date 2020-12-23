require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//running server
app.listen(port, () => {
    console.log('Server running');
});

const agentRouter = require('./routes/agent')
app.use('/agents', agentRouter);

const bienRouter = require('./routes/bien')
app.use('/biens', bienRouter);

const acheteurRouter = require('./routes/acheteur')
app.use('/acheteurs', acheteurRouter);

const annonceRouter = require('./routes/annonce')
app.use('/annonces', annonceRouter);

const acheterRouter = require('./routes/acheter')
app.use('/acheters',acheterRouter)

module.exports = app;