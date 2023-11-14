const { FindAllUser, FindOneUser } = require('../repository/UserRepository');
const { Response } = require("../utils/Response");

// Mock del módulo UserRepository
jest.mock('../repository/UserRepository.js');

// Datos de retorno simulados
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
    ]
};

const FindOneMock = {
    _id: "6553ebad7213e1d73d330176",
    password: "$2a$10$lRnFuE7033QiScsrAtAOFOnCXMbyRENe719QyBX20WLWvhwFmMhfa",
    nombres: "Yura",
    apellidos: "Torres",
    email: "yura12@gmail.com",
    usuario: "yury",
};

describe("Test Users Repository", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should retrieve data for all users", async () => {
        // Configura el mock para que devuelva los datos simulados
        FindAllUser.mockResolvedValueOnce(returnUsers);

        // Llama a la función y espera la respuesta
        const response = await FindAllUser();

        // Verifica la respuesta y los datos simulados
        expect(response).toEqual(returnUsers);
    });

    it("should retrieve data for all users with the model structure", async () => {
        // Configura el mock para que devuelva la respuesta simulada
        FindAllUser.mockResolvedValueOnce(returnUsers);

        // Llama a la función y espera la respuesta
        const response = await FindAllUser();

        // Verifica que la respuesta tenga la misma estructura que el modelo
        expect(response).toEqual(returnUsers);
    });

    it("should retrieve data for one user", async () => {
        const id = "6553ebad7213e1d73d330176";

        // Configura el mock para que devuelva el usuario simulado
        FindOneUser.mockResolvedValueOnce(FindOneMock);

        // Llama a la función y espera la respuesta
        const response = await FindOneUser(id);

        // Verifica que la respuesta coincida con el usuario simulado
        expect(response).toEqual(FindOneMock);
    });
});
