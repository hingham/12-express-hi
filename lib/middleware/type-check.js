'use strict';
// let userError = require('./400.js');

function typeCheck(req, res, next){
  if(req.body.name && req.body.display && req.body.description){
    if( (typeof(req.body.name)==='string') && (typeof(req.body.display)==='string') && (typeof(req.body.description)==='string') ){
      next();
    }
  }
  error400(req, res);

}

function error400 (req, res) {
  console.log('not found');
  res.status(400).send('400 user error');
  req.end();
}

module.exports = {typeCheck};
