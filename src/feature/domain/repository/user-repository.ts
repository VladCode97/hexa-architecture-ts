import { IRepository } from "../../../core/repository/repository";
import { IUser } from "../entities/user-entity";

export interface IUserRepository extends IRepository<IUser> {
    viewByName(name: string): IUser;
}