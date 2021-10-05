import { IRepository } from "../../../core/repository/repository";
import { IUser } from "../entities/user-entity";

export interface IUserRepository extends IRepository<IUser> {
    viewUserByName?(name: string): IUser;
}