/*jshint esversion: 6 */
// api controller
const controller = {};
const model = require('../model/model');

/**
 * id validation by checking exisiting id keys
 * @param  {string} id
 * @param  {string} password
 * @return {bool}    validation result
 */
function idAndPasswordValidation (id, password) {
  return false;
}

controller.default = (req,res) => {
  console.log('sth default action');
  res.send('');
};

controller.setUser = (req,res) => {
  const id = req.params.id;
  const pw = req.params.password;

  // id validation
  // pw validation
  // set id, password set into mysql db

};

// under this line, that is only for test
controller.getAllUser = (req,res) => {
  model.user.findAll()
  .then(users => res.json(users));
};

controller.insertUser = (req,res) => {
  const name = req.params.id || 'test';
  model.user.create({
    name:name
  })
  .then(
    (user) => {
        return res.status(200).json(user);
    });
};

module.exports = controller;
