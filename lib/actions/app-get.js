'use strict';

// function categoriesGet(req,res,next) {
//   let count = db.length;
//   let results = db;
//   res.json({count,results});
// };

// function productsGet(req,res,next) {
//   let count = db.length;
//   let results = db;
//   res.json({count,results});
// };

// function productsGetId(req,res,next) {
//   let id = req.params.id;
//   let record = db.filter((record) => record.id === parseInt(id));
//   res.json(record[0]);
// };

// function categoriesGetId(req,res,next) {
//   let id = req.params.id;
//   let record = db.filter((record) => record.id === parseInt(id));
//   res.json(record[0]);
// };


module.exports = {categoriesGet, productsGet, categoriesGetId, productsGetId};