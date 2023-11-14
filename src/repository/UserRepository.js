const { Response } = require("../utils/Response");
const UserModel = require("../models/UsuariosModels");

module.exports.CreateUser = (user) =>
  user
    .save()
    .then((resp) => {
      Response.status = 201;
      Response.message = "Se ha creado el Usuario Correctamente";
      Response.result = resp;
      return Response;
    })
    .catch((err) => {
      console.error("Error:", err);
      Response.status = 500;
      Response.message = "Ocurrio un error en el servidor";
      Response.result = err;
      throw Response;
    });

module.exports.FindAllUser = (sort) =>
  UserModel.find()
    .sort(sort)
    .then((resp) => {
      Response.status = 200;
      Response.message = "Registros Encontrados";
      Response.result = resp;
      return Response;
    })
    .catch((err) => {
      console.error("Error:", err);
      Response.status = 500;
      Response.message = "Ocurrio un error en el servidor";
      Response.result = err;
      throw Response;
    });

module.exports.FindOneUser = (id) =>
  UserModel.findById({ _id: id })
    .then((resp) => {
      Response.status = 200;
      Response.message = "Registros Encontrados";
      Response.result = resp;
      return Response;
    })
    .catch((err) => {
      console.error("Error:", err);
      Response.status = 500;
      Response.message = "Ocurrio un error en el servidor";
      Response.result = err;
      throw Response;
    });

module.exports.FindOneUsername = (usuario) =>
  UserModel.findOne({ usuario: usuario })
    .then((resp) => {
      Response.status = 200;
      Response.message = "Registros Encontrados";
      Response.result = resp;
      return Response;
    })
    .catch((err) => {
      console.error("Error:", err);
      Response.status = 500;
      Response.message = "Ocurrio un error en el servidor";
      Response.result = err;
      throw Response;
    });

module.exports.deleteUser = (id) =>
  UserModel.findByIdAndDelete(id)
    .then((resp) => {
      Response.status = 200;
      Response.message = "Registro Eliminado correctamente";
      Response.result = resp;
      return Response;
    })
    .catch((err) => {
      console.error("Error:", err);
      Response.status = 500;
      Response.message = "Ocurrio un error en el servidor";
      Response.result = err;
      throw Response;
    });

module.exports.updateUser = (id, user) =>
  UserModel.findOneAndUpdate({ _id: id }, { nombres: user.nombres, apellidos: user.apellidos })
    .then((resp) => {
      Response.status = 200;
      Response.message = "Registro Actualizado correctamente";
      Response.result = resp;
      return Response;
    })
    .catch((err) => {
      console.error("Error:", err);
      Response.status = 500;
      Response.message = "Ocurrio un error en el servidor";
      Response.result = err;
      throw Response;
    });
