import { Request, Response } from 'express';

import { UserService } from '../../services/UserService/UserService';

export class UserController {
    userService: UserService;

    constructor(userService = new UserService()) {
        this.userService = userService;
    }
    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if (!user.name) {
            response.status(400).json({ message: 'Bad request: name invalid' });
        }

        this.userService.createuser(user.name, user.email);

        return response.status(201).json({
            message: 'Usuario criado',
        });
    };

    getAllUser = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers();

        return response.status(200).json(users);
    };
}