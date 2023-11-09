const express = require("express")
const UsersController = require("../controllers/RegionesController");

const api = express.Router();

api.post("/regions/login", UsersController.login);
api.post("/regions/create", UsersController.create);
api.get("/regions/listar/:sort", UsersController.findAll);
api.get("/regions/findbyid/:id", UsersController.findById);
api.get("/regions/findusername/:username", UsersController.findOneUsuario);
api.delete("/regions/delete/:id", UsersController.deleteUserData);
api.put("/regions/update/:id", UsersController.updateUserData);

module.exports = api;
