# restito

## Rules for restito REST API 

### Fields

	api.example.com/v1/products?fields=name,price

### Filtering

	api.example.com/v1/products?filter=price:23000@memory:256,512,1024

### Pagination

	api.example.com/v1/products?offset=10&count=25

### Sorting

	api.example.com/products?sort=price,-name