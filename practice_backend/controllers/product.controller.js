// Importing the Product model for interacting with the database
const Product = require('../models/product.model')

// Get all products
const getProducts = async (req, res) => {
    // Try to fetch all products from the database
    try {
        const products = await Product.find({}) // Retrieve all products from the Product collection
        res.status(200).json(products); // Respond with status 200 and the list of products
    } catch (error) {
        // If an error occurs, respond with status 500 and the error message
        res.status(500).json({ message: error.message })
    }
}

// Get a specific product by its ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params; // Extract product ID from request parameters
        const product = await Product.findById(id); // Find the product by ID
        res.status(200).json(product) // Respond with status 200 and the product details
    } catch (error) {
        // If an error occurs, respond with status 500 and the error message
        res.status(500).json({ message: error.message })
    }
}

// Create a new product
const createProduct = async (req, res) => {
    try {
        // Create a new product using the data from the request body
        const product = await Product.create(req.body)
        res.status(200).json(product) // Respond with status 200 and the created product
    } catch (error) {
        // If an error occurs, respond with status 500 and the error message
        res.status(500).json({ message: error.message })
    }
}

// Update an existing product based on its ID
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract product ID from request parameters
        // Find the product by ID and update it with the data from the request body
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            // If the product does not exist, return a 404 error
            return res.status(404).json({ message: 'Product Not Found!' })
        }

        // Checking if the product has been updated successfully
        const updated = await Product.findById(id); // Retrieve the updated product
        res.status(200).json({ updated }) // Respond with the updated product
    } catch (error) {
        // If an error occurs, respond with status 500 and the error message
        res.status(500).json({ message: error.message })
    }
}

// Delete a specific product based on its ID
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Extract product ID from request parameters
        // Find and delete the product by ID
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            // If the product does not exist, return a 400 error
            return res.status(400).json({ message: 'Product not found' })
        }

        // Respond with a success message indicating the product was deleted
        res.status(200).json({ message: 'Product successfully deleted.' })
    } catch (error) {
        // If an error occurs, respond with status 500 and the error message
        res.status(500).json({ message: error.message });
    }
}

// Exporting the functions so they can be used in the routes
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}
