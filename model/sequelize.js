/*jshint esversion: 6 */
const setting = require('../setting');
const sequelize = require('sequelize');
const config = require(setting.ROOT_PATH + '/config/environment.js');

const sqlId = config.mysql.username;
const sqlPassword = config.mysql.password;
const dbName = config.mysql.database;

if (process.env.NODE_ENV == 'development') {
    console.log('connect to db : ', config);
}


const seq = new sequelize(dbName, sqlId, sqlPassword);

module.exports = seq;
