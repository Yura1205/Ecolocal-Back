const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductsModels = schema({
    id: String,
    nombre: String,
    img:{
        data: Buffer,
        contentType: String
    },
    info:String,
    descripcion:String,
    
});

module.exports = mongoose.model('products_collection', ProductsModels);