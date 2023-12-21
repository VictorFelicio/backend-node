import { UserService } from '../../services/UserService/UserService';
import { UserController } from './UserController';
import { Request } from 'express';
import { makeMockResponse } from '../../__mocks__/mockResponse.mock';

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createuser: jest.fn(),
    };
    const userController = new UserController(mockUserService as UserService);

    it('should add new user ', () => {
        const mockRequest = {
            body: { name: 'joao', email: 'joao@dio.com' },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({
            message: 'Usuario criado',
        });
    });
});
