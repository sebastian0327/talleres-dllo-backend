import * as fs from 'fs';
import * as path from 'path';

const datosPath = path.resolve(__dirname, './datos.json');
let datos: UserType[] = JSON.parse(fs.readFileSync(datosPath, 'utf-8'));

type UserType = {
    id: number;
    name: string;
    hobbies: string[];
    years: number;
    team: string;
    faction: string;
};

const UserModel = {
    find: async (query: Partial<UserType> = {}): Promise<UserType[]> => {
        return datos.filter(user => {
            return Object.entries(query).every(([key, value]) => {
                if (Array.isArray(value)) {
                    return user.hobbies.some(hobby => value.includes(hobby));
                }
                return user[key as keyof UserType] === value; 
            });
        });
    },
    
    create: async (newUser: UserType): Promise<UserType> => {
        const nextId = datos.length ? Math.max(...datos.map(user => user.id)) + 1 : 1;
        const userToCreate = { ...newUser, id: nextId };
        datos.push(userToCreate);

        return userToCreate;
    }
};

export { UserModel, UserType };
