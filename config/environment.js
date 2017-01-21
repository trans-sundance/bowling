/*jshint esversion: 6 */
const setting = require('../setting');
const environments = {
  development: {
    mysql: {
      username: 'root',
      password: 'Pride23',
      database: 'testDB'
    }
  },

  test: {
    mysql: {
      username: 'root',
      password: 'root',
      database: ''
    }
  },

  production: {

  }
};

const nodeEnv = setting.ENV_TEXT;
process.env.NODE_ENV = setting.ENV_TEXT; // 환경 세팅

module.exports = environments[nodeEnv];
