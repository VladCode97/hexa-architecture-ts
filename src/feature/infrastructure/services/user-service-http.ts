import { IUser } from './../../domain/entities/user-entity';
import { IUserRepository } from './../../domain/repository/user-repository';
import { UserModel } from '../database/Models/user-model';
import { Service } from 'typedi';

@Service('userHttp.service')
export class UserServiceHttp implements IUserRepository {

    async createAll(user: IUser): Promise<string> {
        try {
            if (user) {
                await UserModel.create(user);
                return `${user.name} create sucess`;
            }
        } catch (exception) {
            throw new Error(exception.message);
        }
    }

    async viewAll(): Promise<Array<IUser>> {
        try {
            const response = await UserModel.find({});
            return response;
        } catch (exception) {
            throw new Error(exception.message);
        }
    }


}