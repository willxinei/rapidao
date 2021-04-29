import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateUserService from '@modules/users/services/CreateUsersService';

export default class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const {
            name,
            email,
            telefone,
            password,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            CEP,
        } = req.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            name,
            email,
            telefone,
            password,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            CEP,
        });

        return res.json(classToClass(user));
    }
}
