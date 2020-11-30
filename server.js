'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const bcrypt = require('bcrypt');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

//START_ASYNC
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if(err) return console.log(err);
  console.log(hash);
  // save the hash into db.
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if(err) return console.log(err);
    console.log(res);
  });
});
//END_ASYNC

app.listen(process.env.PORT || 3000, () => {});
