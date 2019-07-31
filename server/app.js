const express = require('express');
const cors = require('cors');
const app = express();

const seq = require('./db');


app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

const routes = require('./routes')(app);

app.listen(8080, () => {
    console.log('Server running on 8080!');
});