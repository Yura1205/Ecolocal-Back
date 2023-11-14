const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductsModels = schema({
    id: String,
    nombre: String,
    img:String,
    info:String,
    descripcion:String,
    
});

module.exports = mongoose.model('products_collection', ProductsModels);