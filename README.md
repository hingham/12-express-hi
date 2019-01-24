![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Bestest Expressest Server

### Author: Hannah Ingham, Brent Wordward

#### Worked with Lena Evy

### Links and Resources
* [repo](https://github.com/hingham/12-express-hi)
* [![Build Status](https://www.travis-ci.com/hingham/12-express.svg?branch=master)](https://www.travis-ci.com/hingham/12-express)
* [heroku](https://lab-12-hi.herokuapp.com)


###Docs
* swagger route: `/docs`

### Modules
#### middleware: type-check.js, 404.js, 500.js


### Setup
#### `.env` requirements
* npm init 
* npm i express
* port: 8080

#### Running the app
* `nodemon index.js`
* Endpoint: `/category` `/products`
* Returns a JSON API object]
* get/categories; get/categories/{id}, put/categories/{id}, delete/categories/{id}
    put/categories

* Example post: 
`echo '{"name": "test", "display":"test", "description":"test"}' | http post :8080/category`

#### Tests
* How do you run tests?: run tests with supertests, and mockrequests
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
