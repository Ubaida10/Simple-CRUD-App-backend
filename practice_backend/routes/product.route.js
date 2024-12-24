// Importing the required dependencies
const express = require('express'); // Express framework for routing
const router = express.Router(); // Router instance to define API routes
const productController = require('../controllers/product.controller'); // Importing the product controller for handling the logic

// Route to get all products
router.get('/', productController.getProducts)
// When a GET request is made to '/api/products', it will call the getProducts function from the productController

// Route to get a specific product by its ID
router.get('/:id', productController.getProductById)
// When a GET request is made to '/api/products/:id', it will call the getProductById function from the productController
// The ':id' is a route parameter that will be used to fetch the product by its ID

// Route to create a new product
router.post('/', productController.createProduct)
// When a POST request is made to '/api/products', it will call the createProduct function from the productController
// This will create a new product using the data in the request body

// Route to update a specific product based on its ID
router.put('/:id', productController.updateProduct)
// When a PUT request is made to '/api/products/:id', it will call the updateProduct function from the productController
// The ':id' is used to identify the product to be updated

// Route to delete a specific product based on its ID
router.delete('/:id', productController.deleteProduct)
// When a DELETE request is made to '/api/products/:id', it will call the deleteProduct function from the productController
// The ':id' is used to identify the product to be deleted

// Exporting the router so it can be used in the main application
module.exports = router;
