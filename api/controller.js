/*jshint esversion: 6 */
// api controller
const controller = {};

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

controller.getUser = (req,res) => {

};

module.exports = controller;
