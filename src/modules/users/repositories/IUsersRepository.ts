import ICreateUsersDTO from '../dtos/ICreateUsersDTO';
import User from '../infra/typeorm/entities/Users';

export default interface IUsersRepository {
    create(data: ICreateUsersDTO): Promise<User>;
    save(user: User): Promise<User>;
    findEmail(email: string): Promise<User | undefined>;
}
