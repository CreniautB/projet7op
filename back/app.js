const express = require('express');
require('dotenv').config()

const app = express();

const db = require("./models");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
    });

app.use(express.json());       

app.use(express.urlencoded({extended:false}));
   

require('./routes/user.js')(app);
require('./routes/message.js')(app);


db.sequelize.sync();

module.exports = app;