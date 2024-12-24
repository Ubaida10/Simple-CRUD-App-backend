const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, 'Please enter product name']
        },
        quantity:{
            type: Number,
            required:[true, 'Please enter product quantity'],
            default: 0
        },
        price:{
            type:Number,
            required:[true, 'Please enter product price'],
            default: 0
        },
        image:{
            type: String,
            require:false
        },
    },
    {
        timestamps: true
    }
);


const product = mongoose.model("Product", ProductSchema);
module.exports = product;