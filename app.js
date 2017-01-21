/*jshint esversion: 6 */
const setting = require('./setting');
const express = require('express');
// const environment = require('./config/environment.js');
const app = express();
const api = require(setting.ROOT_PATH + '/api/index.js');
const router = require(setting.ROOT_PATH + '/router/router.js');
const dbsync = require(setting.ROOT_PATH + '/model/sync-db');
const util = require(setting.ROOT_PATH + '/util/util');

app.use('/api', api);
app.use('/', router);
app.listen(setting.SERVER_PORT, () => {
  util.devLogger('Node server started.\n listening port ' + setting.SERVER_PORT + '... ');
  dbsync();
});
