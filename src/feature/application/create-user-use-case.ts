import { IUser } from '../domain/entities/user-entity';
import { IUserRepository } from './../domain/repository/user-repository';

export class CreateUserUseCase implements IUserRepository {

    constructor(private readonly userRepository: IUserRepository) { }

    createAll(user: IUser): string {
        return this.userRepository.createAll(user);
    }

} 