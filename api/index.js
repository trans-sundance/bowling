/*jshint esversion: 6 */
// api router
const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.route('/plans/:userId')
.get(controller.default);

router.route('/users/:userId')
.get(controller.getUser);

// router.route()
// .get();


module.exports = router;
