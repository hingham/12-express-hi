'use strict';

function categoriesPut(req,res, next) {
  let id = parseInt(req.params.id);
  let record = new Record(req.body);
  if(record.name){
    record.id = id;
  }
  for(let i = 0; i < db.length; i++){
    if(record.id === db[i]['id']){
      db[i] = record;
    }
  }
  res.json(record);
};

function productsPut(req,res,next) {
  let id = parseInt(req.params.id); //id the of the record to change
  let record = new PostRec(req.body);
  if(record.name){
    record.id = id;
  }
  for(let i = 0; i < db.length; i++){
    if(record.id === db[i]['id']){
      db[i] = record;
    }
  }
  res.json(record);
};

module.exports = {categoriesPut, productsPut};