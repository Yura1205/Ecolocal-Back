const ProductModel = require("../models/ProductsModels");
const { CreateProduct, FindAllProducts, FindOneProduct, DeleteProduct, UpdateProduct } = require("../repository/ProductRepository");

async function create(req, res) {
    const params = req.body;
    const contentType = getContentTypeFromExtension(params.img);

    const product = new ProductModel();

    if (params.nombre == "" || params.nombre == undefined) {
        res.status(404).send({ message: "El nombre es requerido" });
        return;
    }

    product.id = params.id;
    product.nombre = params.nombre;

    if (params.img) {
        product.img = {
            data: Buffer.from(params.img, 'base64'),
            contentType: contentType
        };
    }

    try {
        const response = await CreateProduct(product);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(error.status).send(error);
    }
}

async function findAll(req, res) {
    const sort = req.params["sort"];

    const query = { nombre: sort };

    try {
        const response = await FindAllProducts(query);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(error.status).send(error);
    }
}

async function findById(req, res) {
    const id = req.params["id"];

    try {
        const response = await FindOneProduct(id);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(error.status).send(error);
    }
}

async function findOneNombre(req, res) {
    const nombre = req.params["nombre"];

    try {
        const response = await FindOneProduct({ nombre: nombre });
        res.status(response.status).send(response);
    } catch (error) {
        res.status(error.status).send(error);
    }
}

async function deleteProductData(req, res) {
    const id = req.params["id"];

    try {
        const response = await DeleteProduct(id);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(error.status).send(error);
    }
}

async function updateProductData(req, res) {
    const id = req.params["id"];
    const body = req.body;
    const contentType = getContentTypeFromExtension(body.img);

    let product = new ProductModel();
    product.nombre = body.nombre;

    if (body.img) {
        product.img = {
            data: Buffer.from(body.img, 'base64'),
            contentType: contentType
        };
    }

    try {
        const response = await UpdateProduct(id, product);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(error.status).send(error);
    }
}

function getContentTypeFromExtension(filename) {
    if (!filename) {
        return 'application/octet-stream'; // Tipo de contenido predeterminado para otros tipos de archivos si no se proporciona el nombre del archivo
    }

    const extension = filename.split('.').pop().toLowerCase();

    switch (extension) {
        case 'png':
            return 'image/png';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'svg':
            return 'image/svg+xml';
        default:
            return 'application/octet-stream'; // Tipo de contenido predeterminado para otros tipos de archivos
    }
}

module.exports = {
    create,
    findAll,
    findById,
    findOneNombre,
    deleteProductData,
    updateProductData
};
