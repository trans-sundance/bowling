/*jshint esversion: 6 */

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

const nodeEnv = 'development';
process.env.NODE_ENV = 'development'; // 환경 세팅

module.exports = environments[nodeEnv];
