/*jshint esversion: 6 */

const environments = {
  development: {
    mysql: {
      username: 'root',
      password: 'root',
      database: ''
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

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environments[nodeEnv];
