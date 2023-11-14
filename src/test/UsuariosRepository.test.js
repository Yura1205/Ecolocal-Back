const UserModel = require("../models/UsuariosModels");
const {
  FindOneUser,
  CreateUser,
  updateUser,
  FindOneUsername,
} = require("../repository/UserRepository");

describe("Test Usuarios", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should CreateUser User response ok", async () => {
    const user = new UserModel({
      nombres: "test nombres",
      apellidos: "test apellidos",
      telefono: "test telefono",
      email: "test email",
      edad: "test edad",
      usuario: "userTest",
    });

    jest
      .spyOn(user, "save")
      .mockImplementationOnce(() => Promise.resolve(user));

    const result = await CreateUser(user);

    expect(result.status).toBe(201);
    expect(result.message).toBe("Se ha creado el Usuario Correctamente");
  });

  it("Should CreateUser User response Fail", async () => {
    const expectedErrorData = { errorMessage: "test error scenario" };
    const user = new UserModel({
      nombres: "test nombres",
      apellidos: "test apellidos",
      telefono: "test telefono",
      email: "test email",
      edad: "test edad",
      usuario: "userTest",
    });

    jest
      .spyOn(user, "save")
      .mockImplementationOnce(() => Promise.reject(new Error(expectedErrorData)));

    try {
      await CreateUser(user);
    } catch (error) {
      expect(error.status).toBe(500);
      expect(error.message).toBe("Ocurrio un error en el servidor");
    }
  });

  it("Should FindOneUsername User response ok", async () => {
    const userId = "123";
    const user = {
      _id: userId,
      nombres: "test nombres",
      apellidos: "test apellidos",
      telefono: "test telefono",
      email: "User1@gmail.com",
      edad: "test edad",
      usuario: "user1",
    };

    jest
      .spyOn(UserModel, "findOne")
      .mockImplementationOnce(() => Promise.resolve(user));

    const result = await FindOneUsername(user.usuario);

    expect(result.status).toBe(200);
    expect(result.message).toBe("Registros Encontrados");
    expect(result.result).toEqual(user);
  });

  it("Should FindOneUsername User response Fail", async () => {
    const userId = "123";
    const expectedErrorData = { errorMessage: "test error scenario" };

    jest
      .spyOn(UserModel, "findOne")
      .mockImplementationOnce(() => Promise.reject(new Error(expectedErrorData)));

    try {
      await FindOneUsername(userId);
    } catch (error) {
      expect(error.status).toBe(500);
    }
  });

  it("Should updateUser response ok", async () => {
    const userId = "654afad180c86c12c0c29d14";

    const user = new UserModel({
      nombres: "test nombres",
      apellidos: "test apellidos",
      telefono: "test telefono",
      email: "test email",
      edad: "test edad",
      usuario: "userTest",
    });

    jest
      .spyOn(UserModel, "findOneAndUpdate")
      .mockImplementationOnce(() => Promise.resolve(user));

    const result = await updateUser(userId, user);

    expect(result.status).toBe(200);
    expect(result.message).toBe("Registro Actualizado correctamente");
  });

  it("Should updateUser response Fail", async () => {
    const userId = "654afad180c86c12c0c29d14";
    const expectedErrorData = { errorMessage: "test error scenario" };

    const user = new UserModel({
      nombres: "test nombres",
      apellidos: "test apellidos",
      telefono: "test telefono",
      email: "test email",
      edad: "test edad",
      usuario: "userTest",
    });

    jest
      .spyOn(UserModel, "findOneAndUpdate")
      .mockImplementationOnce(() => Promise.reject(new Error(expectedErrorData)));

    try {
      await updateUser(userId, user);
    } catch (error) {
      expect(error.status).toBe(500);
    }
  });
});
