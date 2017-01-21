/*jshint esversion: 6 */

const user = require('./model');
const seq = require('./sequelize');

function dbsync () {
  seq.sync({force: true})
     .then(() => {
       console.log('Databases sync');
     });
}

module.exports = ()=>{
  dbsync();
};
