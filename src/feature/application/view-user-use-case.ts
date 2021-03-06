import { IUser } from '../domain/entities/user-entity';
import { IUserRepository } from '../domain/repository/user-repository';

export class ViewUserCase implements IUserRepository {

    constructor(private readonly userRepository: IUserRepository) { }

    viewUserByName(name: string): IUser {
        return this.userRepository.viewUserByName(name);
    }

    viewAllUsers(): Array<IUser> {
        return this.userRepository.viewAll();
    }


}