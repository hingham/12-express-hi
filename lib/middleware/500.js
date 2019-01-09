'use strict';

function error500 (err,req,res,next) {
  console.log('In the error handler');
  res.status(500).send('WTF');
  res.end();
}

module.exports = {error500};
