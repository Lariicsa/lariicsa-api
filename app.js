require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${process.env.DB}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [process.env.ORIGIN]
  })
);

// // default value for title local
app.locals.title = 'Monitor EF';

const index = require('./routes/index');
app.use('/api', index);

module.exports = app;
