'use strict';
/*jshint node:true */
/*jshint esversion: 6 */
// api router
const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.use(function(req,res,next){
  console.log('middleware testing...');
  next();
});

router.route('/users/:userId')
.get(controller.getUser)
.post(controller.insertUser);

router.route('/users/setUser/:id')
.get(controller.insertUser);

// test method
// by callback
router.route('/usersCallback')
.get(
  (req, res)=>{
    var callback = res.json.bind(res);
    controller.getAllUserCallback(callback);
  }
);

// test method
// by promise
router.route('/usersAsync/')
.get((req,res) => {
  controller.getAllUserAsync()
  .then(
    (ret) => {
      res.send(ret);
    },
    () => {
      console.log('fail');
      res.send('request failed');
    }
  );
});

module.exports = router;
