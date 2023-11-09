const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RegionsModels = schema({
    id: String,
    nombre: String,
    img: String,
    
});

module.exports = mongoose.model('regions_collection', RegionsModels);