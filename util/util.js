/*jshint esversion: 6 */
const setting = require('../setting');
const environment = require(setting.ROOT_PATH + '/config/environment');

var util = {
  devLogger : function devLogger (string) {
    if (process.env.NODE_ENV == setting.ENV_TEXT) {
      console.log('DEV LOG: ', string);
    }
  }
};

module.exports = util;
