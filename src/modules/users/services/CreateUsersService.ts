import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/Users';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    name: string;
    email: string;
    telefone: number;
    password: string;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    CEP: number;
}

@injectable()
class CreateUserService {
    constructor(
        @inject('U')
        private userRepository: IUsersRepository,
    ) {}

    public async execute({
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
    }: IRequest): Promise<User> {
        const checkUser = await this.userRepository.findEmail(email);

        if (checkUser) {
            throw new AppError('email ja existe');
        }

        const user = await this.userRepository.create({
            name,
            telefone,
            email,
            password,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            CEP,
        });

        return user;
    }
}

export default CreateUserService;
