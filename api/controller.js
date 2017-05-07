'use strict';
/*jshint node:true */
/*jshint esversion: 6 */
// api controller
// var controller = {};
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

const controller = {
  setUser : function (req,res) {
    const id = req.params.id;
    const pw = req.params.password;

    // id validation
    // pw validation
    // set id, password set into mysql db
  },

  getUser : (req,res) => {
    let user = model.user.findOne({
      where:{name:req.params.name}
    });

    res.status(200).json(user);
  }

};

controller.setUser = (req,res) => {
  const id = req.params.id;
  const pw = req.params.password;

  // id validation
  // pw validation
  // set id, password set into mysql db

};

controller.getUser = (req,res) => {
  let user = model.user.findOne({
    where:{name:req.params.name}
  });

  res.status(200).json(user);
};

controller.getAllUserAsync = () => {
  return new Promise(function(resolved, rejected){
    model.user.findAll()
    .then(
      (ret)=>{
        resolved(ret);
      },
      (ret)=>{
        rejected(ret);
      }
    );
  });
};

controller.getAllUserCallback = (callback) => {
  model.user.findAll()
  .then(
    (result)=>{
      callback(result);
    },
    ()=>{
      callback({res:'fail'});
    }
  );
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
