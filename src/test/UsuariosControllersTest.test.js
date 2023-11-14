const { FindAllUser, CreateUser } = require("../repository/UserRepository");
const { Response } = require("../utils/Response");
const { findAll, create } = require("../controllers/UsuariosController");
const { mockRequest, mockResponse } = require("../test/Mocks/Mocks");

jest.mock("../repository/UserRepository.js");

const returnUsers = {
  status: 200,
  message: "Registros Encontrados",
  result: [
    {
      _id: "6553ebad7213e1d73d330176",
      password: "$2a$10$lRnFuE7033QiScsrAtAOFOnCXMbyRENe719QyBX20WLWvhwFmMhfa",
      nombres: "Yura",
      apellidos: "Torres",
      email: "yura12@gmail.com",
      usuario: "yury",
    }
  ],
};

const requestUser = {
  body: {
  password: "1234",
  nombres: "yura",
  apellidos: "Torres",
  email: "yura12@gmail.com",
  usuario: "yury",
}};
describe("Test Users Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should data to Controller Users", async () => {
    let req = mockRequest();
    const res = mockResponse();
    FindAllUser.mockReturnValueOnce(returnUsers);

    await findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should data to Controller Create Fail Users", async () => {
    let req = mockRequest();
    req.params.password= "1234";
    req.params.nombres= "Yura";
    req.params.apellidos= "Torres";
    req.params.email= "yura12@gmail.com";
    req.params.usuario= "yury";

    const res = mockResponse();
    Response.message = returnUsers.message;
    Response.status = returnUsers.status;
    Response.result = returnUsers.result;

    CreateUser.mockReturnValueOnce(returnUsers);

    const data = await create(req, res);
    console.log(data)
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

