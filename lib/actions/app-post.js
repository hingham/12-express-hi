'use strict';

let constructor = require('./constructor.js');

// function productsPost(req,res,next, arr) {
//   let record = new constructor.PostRec(req.body);
//   arr.push(record);
//   res.json(record);
// }

// function categoriesPost(req,res, next, arr) {
//   let record = new constructor.Record(req.body);
//   arr.push(record);
//   res.json(record);
// }

module.exports = (productsPost, categoriesPost);
