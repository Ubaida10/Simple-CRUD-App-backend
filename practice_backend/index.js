// Importing required dependencies

const express = require('express'); // Express framework for building the API
const mongoose = require('mongoose'); // Mongoose to interact with MongoDB
const app = express(); // Creating an instance of an Express app
const productRoute = require('./routes/product.route.js'); // Importing product-related routes


// Middleware for parsing JSON bodies of incoming requests
app.use(express.json()); // This middleware allows us to work with JSON in request bodies


// Defining routes
app.use('/api/products', productRoute); // Mounting the product routes under the '/api/products' path


// Home route (basic GET request for testing)
app.get('/', (req, res)=> {
    res.send('Hello from Node API'); // Responds with a simple message on the root route
});


// Connecting to MongoDB database using Mongoose
mongoose.connect("mongodb+srv://au889482:admin@backenddb.s4wlp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(()=> {
        console.log("Connected to database"); // Log message if the connection to MongoDB is successful
        // Start the Express server on port 3000
        app.listen(3000, ()=> {
            console.log('Listening on port 3000'); // Log message when server starts listening
        });
    })
    .catch(()=> {
        console.log("Connection failed"); // Log message if there is an error connecting to the database
    });
