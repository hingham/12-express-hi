'use strict';
const express = require('express');
const uuid = require('uuid/v1');
const app = express();
const type = require('./middleware/type-check.js');
const errorHandler = require('./middleware/500.js');
const error404 = require('./middleware/404.js');
const constructor = require('./actions/constructor.js');
const swaggerUI = require('swagger-ui-express');
const cwd = process.cwd();


const swaggerDocs = require(`${cwd}/docs/lab-12-resubmit-swagger.json`);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.use(express.json());

let db = [];

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});


app.get('/category', categoriesGet);
app.get('/category/:id', categoriesGetId);
app.post('/category', type.typeCheck, categoriesPost);
app.put('/category/:id', categoriesPut);
app.delete('/category/:id', categoriesDelete);


app.get('/product', productsGet);
app.get('/product/:id', productsGetId);
app.post('/product', productsPost);
app.put('/product/:id', type.typeCheck, productsPut);
app.delete('/product/:id', productsDelete);

function productsGet(req,res,next) {
  let count = db.length;
  let results = db;
  res.json({count,results});
}

function productsGetId(req,res,next) {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
}

function productsPost(req,res,next, arr) {
  let record = new constructor.PostRec(req.body);
  arr.push(record);
  res.json(record);
}

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
}


function productsDelete(req,res,next) {
  let id = parseInt( req.params.id );
  db = db.filter((record) => record.id !== id );
  res.status(200).send({});
}


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

function categoriesGet(req,res,next) {
  let count = db.length;
  let results = db;
  res.json({count,results});
}

function categoriesGetId(req,res,next) {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
}

function categoriesPost(req,res, next) {
  let record = new constructor.Record(req.body);
  db.push(record);
  res.json(record);
}

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
}

function categoriesDelete(req,res,next) {
  let id = parseInt( req.params.id );
  db = db.filter((record) => record.id !== id );
  res.status(200).send({});
}


app.use('*', error404.error404);
app.use(errorHandler.error500);