import { User, UserService } from './UserService';

describe('UserService', () => {
    const mockDb: Array<User> = [];
    const userService = new UserService(mockDb);

    it('should add new user', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createuser('João', 'joao@dio.com');

        expect(mockConsole).toHaveBeenCalledWith("Db atualizado", mockDb);
    });
});
