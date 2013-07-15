# Restito

## Installation

    $ npm install restito

## Example

```javascript
//setup middleware for express
var restito = require('restito');

//...
app.use(restito());

//ex. URL: /products?fields=name&filter=price:100@memory:256,512&offset=0&count=20&sort=price

//get fields:
var fields = req.restito.fields(); // fields = ['name']

//get filter:
var filter = req.restito.filter(); // filter = {price: 100, memory: [256, 512]}

//get offset:
var offset = req.restito.offset(); // offset = 0

//get count:
var count = req.restito.count(); //count = 20

//get sort:
var sort = req.restito.sort(); //sort = ['price']

```


## Rules for restito REST API 

### Fields

	api.example.com/v1/products?fields=name,price

### Filtering

	api.example.com/v1/products?filter=price:23000@memory:256,512,1024

### Pagination

	api.example.com/v1/products?offset=10&count=25

### Sorting

	api.example.com/products?sort=price,-name