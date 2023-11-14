const {FindAllUser, FindOneUser} = require('../repository/UserRepository');
const {Response} = require("../utils/Response");

jest.mock('../repository/UserRepository.js');

const returnUsers = {
    "status": 200,
    "message": "Registros Encontrados",
    "result": [
      {
        "_id": "6553ebad7213e1d73d330176",
      "password": "$2a$10$lRnFuE7033QiScsrAtAOFOnCXMbyRENe719QyBX20WLWvhwFmMhfa",
      "nombres": "Yura",
      "apellidos": "Torres",
      "email": "yura12@gmail.com",
      "usuario": "yury",
      }
    ]
}

const FindOneMock = {
  "_id": "6553ebad7213e1d73d330176",
  "password": "$2a$10$lRnFuE7033QiScsrAtAOFOnCXMbyRENe719QyBX20WLWvhwFmMhfa",
  "nombres": "Yura",
  "apellidos": "Torres",
  "email": "yura12@gmail.com",
  "usuario": "yury",
  
  };

describe("Test Users Repository", ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should data Users", ()=>{
        FindAllUser.mockReturnValueOnce(returnUsers);
        const response = FindAllUser();

        expect(response).toBe(returnUsers);
    })

    it("should data Users Model", ()=>{
        Response.message = returnUsers.message;
        Response.status = returnUsers.status;
        Response.result = returnUsers.result;
        
        FindAllUser.mockReturnValueOnce(Response);
        const response = FindAllUser();

        expect(response).toBe(Response);
    })

    it("should one only user", ()=>{
        const id = "6553ebad7213e1d73d330176";
        FindOneUser.mockReturnValueOnce(FindOneMock);

        const response = FindOneUser(id);

        expect(response._id).toBe(FindOneMock._id);
        expect(response).not.toBeNull();
    })

})