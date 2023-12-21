import { db } from '../../db';

 export interface User {
    name: string;
    email: string;
}

export class UserService {
    db: User[];

    constructor(database = db) {
        this.db = database;
    }

    createuser = (name: string, email: string) => {
        const user = {
            name,
            email,
        };

        this.db.push(user);

        console.log('Db atualizado', this.db);
    };

    getAllUsers = () => {
        return db;
    };
}
