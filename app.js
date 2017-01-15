/*jshint esversion: 6 */

const express = require('express');
const environment = require('./config/environment.js');
const app = express();
const api = require('./api/index.js');
const router = require('./router/router.js');

app.use('/api', api);
app.use('/', router);


app.listen(3000, () => {
  console.log('Node server started.\n listening port 3000... ');
});
