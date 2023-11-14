const { Response } = require("../utils/Response");
const ProductModel = require("../models/ProductsModels");

module.exports.CreateProduct = async (product) => {
    try {
        const resp = await ProductModel.create(product);
        Response.status = 201;
        Response.message = "Se ha creado el Producto Correctamente";
        Response.result = resp;
        return Response;
    } catch (err) {
        console.error("error:", err);
        Response.status = 500;
        Response.message = "Ocurrió un error en el servidor";
        Response.result = err;
        throw Response;
    }
};

module.exports.FindAllProducts = async (sort) => {
    try {
        const resp = await ProductModel.find().sort(sort);
        Response.status = 200;
        Response.message = "Registros Encontrados";
        Response.result = resp;
        return Response;
    } catch (err) {
        console.error("error:", err);
        Response.status = 500;
        Response.message = "Ocurrió un error en el servidor";
        Response.result = err;
        throw Response;
    }
};

module.exports.FindOneProduct = async (id) => {
    try {
        const resp = await ProductModel.findById(id);
        Response.status = 200;
        Response.message = "Registro Encontrado";
        Response.result = resp;
        return Response;
    } catch (err) {
        console.error("error:", err);
        Response.status = 500;
        Response.message = "Ocurrió un error en el servidor";
        Response.result = err;
        throw Response;
    }
};

module.exports.DeleteProduct = async (id) => {
    try {
        const resp = await ProductModel.findByIdAndDelete(id);
        Response.status = 200;
        Response.message = "Registro Eliminado correctamente";
        Response.result = resp;
        return Response;
    } catch (err) {
        console.error("error:", err);
        Response.status = 500;
        Response.message = "Ocurrió un error en el servidor";
        Response.result = err;
        throw Response;
    }
};

module.exports.UpdateProduct = async (id, product) => {
    try {
        const resp = await ProductModel.findByIdAndUpdate(id, product, { new: true });
        Response.status = 200;
        Response.message = "Registro Actualizado correctamente";
        Response.result = resp;
        return Response;
    } catch (err) {
        console.error("error:", err);
        Response.status = 500;
        Response.message = "Ocurrió un error en el servidor";
        Response.result = err;
        throw Response;
    }
};
