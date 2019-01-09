'use strict';

function Record (body) {
  this.name = body.name;
  this.display = body.display;
  this.description = body.description;
  this.id = Math.floor( Math.random() * 1000 );
}

  

function PostRec (body) {
  this.name = body.name;
  this.category = body.category;
  this.display = body.display;
  this.description = body.description;
  this.id = Math.floor( Math.random() * 1000 );
  
}

module.exports= {Record, PostRec};
  