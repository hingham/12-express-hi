'use strict';

function productsPost(req,res,next) {
  let record = new PostRec(req.body);
  db.push(record);
  res.json(record);
};

function categoriesPost(req,res, next) {
  let record = new Record(req.body);
  db.push(record);
  console.log(db);
  res.json(record);
};

module.exports = (productsPost, categoriesPost);
