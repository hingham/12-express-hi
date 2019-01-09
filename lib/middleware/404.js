'use strict';

function error404 (req, res) {
  console.log('not found');
  res.status(404).send('not found');
  req.end;
}

module.exports = {error404};
