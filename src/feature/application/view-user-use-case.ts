import { IUser } from '../domain/entities/user-entity';
import { IUserRepository } from '../domain/repository/user-repository';

export class ViewUserCase {

    constructor(private readonly userRepository: IUserRepository) { }

    viewUserByName(name: string): IUser {
        return this.userRepository.viewByName(name);
    }

    viewAllUsers(): Array<IUser> {
        return this.userRepository.viewAll();
    }


}