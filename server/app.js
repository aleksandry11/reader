const express = require('express');
const cors = require('cors');
const app = express();

// middleware

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// routes
const routes = require('./routes')(app);

// error handling
app.use((err, req, res, next) => {
    console.log(err.message);
});

app.listen(8080, () => {
    console.log('Server running on 8080!');
});