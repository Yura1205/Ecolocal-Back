const mongoose = require('mongoose');
const schema = mongoose.Schema;

const VendedoresSchema = schema({
    nombres: String,
    nombreTienda: String,
    apellidos: String,
    telefono: String,
    email: String,
    usuario: String,
    password: String
});

module.exports = mongoose.model('vendedores_collection', VendedoresSchema);