const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const mongoose = require('mongoose');
const cors = require('cors');

const app = new express();

app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/yeahball');

consign({}).include('models')
    .then('business')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(3000, function () {
    console.log('YeahBall on 3000');
});