const express = require("express")
const ProductsController = require("../controllers/ProductsController");

const api = express.Router();

api.post("/products/create", ProductsController.create);
api.get("/products/listar/:sort", ProductsController.findAll);
api.get("/products/findbyid/:id", ProductsController.findById);
api.get("/products/findusername/:username", ProductsController.findOneNombre);
api.delete("/products/delete/:id", ProductsController.deleteProductData);
api.put("/products/update/:id", ProductsController.updateProductData);

module.exports = api;
