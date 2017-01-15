/*jshint esversion: 6 */
// api router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('root\n');
});

router.get('/login', (req, res) => {
  let testJson = [
    {
      id:1,
      name:'json'
    },
    {
      id:2,
      name:'json2'
    }
  ];
  res.json(testJson);
});

// router.get('/log/:date/:time', (req, res) => {
//   res.send('date: ' + req.params.date);
// });

module.exports = router;
