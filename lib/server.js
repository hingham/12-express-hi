'use strict';
const express = require('express');
const uuid = require('uuid/v1');
const app = express();
const type = require('./middleware/type-check.js');
const PORT = process.env.PORT || 8080;
const errorHandler = require('./middleware/500.js');
const error404 = require('./middleware/404.js');
const get = require('./actions/app-get.js');
const post = require('./actions/app-post.js');
const put = require('./actions/app-put.js');
const del = require('./actions/app-delete.js');

app.use(express.json());

let db = [];

function Record (body) {
  this.name = body.name;
  this.display = body.display;
  this.description = body.description;
  this.id = Math.floor( Math.random() * 1000 );
}


app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});


app.get('/categories', get.categoriesGet);
app.get('/categories/:id', get.categoriesGetId);
app.post('/categories', post.categoriesPost);
app.put('/categories/:id', put.categoriesPut);
app.delete('/categories/:id', del.categoriesDelete);

/////////////post rec files
function PostRec (body) {
  if(body.name && body.display && body.description){
    this.name = body.name;
    this.category = body.category;
    this.display = body.display;
    this.description = body.description;
    this.id = Math.floor( Math.random() * 1000 );
  }
}


app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/products', get.productsGet);
app.get('/products/:id', get.productsGetId);
app.post('/products', post.productsPost);
app.put('/products/:id', type.typeCheck, put.productsPut);
app.delete('/products/:id', del.productsDelete);

app.use('*', error404.error404);
app.use(errorHandler.error500);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
