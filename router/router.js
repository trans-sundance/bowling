/*jshint esversion: 6 */
// api router
const express = require('express');
const router = express.Router();
const fs = require('fs');
const ejs = require('ejs');
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

router.get('/bowling', (req,res) => {
  // stored data in DB originally
  // but temporally created obj for test
  var obj = {
    frameIndex : 0,
    strokeIndex : 0,
    scoreList : [],
    strokeList : [],
    totalScore : 0
  };
  res.render('home.html', obj);

  // var url = '/Users/MCS/dev/study/bowling/home.html';
  // console.log(url);
  // fs.readFile(url, 'utf8', function(err, text){
  //     res.send(text);
  // });
});


module.exports = router;
