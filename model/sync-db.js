/*jshint esversion: 6 */

const user = require('./model');
const seq = require('./sequelize');

function dbsync () {
  seq.sync({force: false})
     .then(() => {
       console.log('Databases sync complete.');
     });
}

module.exports = ()=>{
  dbsync();
};
