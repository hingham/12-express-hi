'use strict';

function productsDelete(req,res,next) {
  let id = parseInt( req.params.id );
  db = db.filter((record) => record.id !== id );
  res.status(200).send({});
};

function categoriesDelete(req,res,next) {
  let id = parseInt( req.params.id );
  db = db.filter((record) => record.id !== id );
  res.status(200).send({});
};


module.exports = {productsDelete, categoriesDelete};