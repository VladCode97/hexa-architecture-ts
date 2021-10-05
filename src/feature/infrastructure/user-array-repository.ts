import { Usermockup } from "../../common/mockup/users-mockup";
import { IUser } from "../domain/entities/user-entity";
import { IUserRepository } from "../domain/repository/user-repository";

export class UserArrayRepository implements IUserRepository {

    private users: Array<IUser>;

    constructor() {
        this.users = Usermockup;
    }

    createAll(user: IUser): string {
        this.users.push(user);
        return `${user.name} create success !!!`;
    }

    viewByName(name: string): IUser {
        return this.users.find((user: IUser) => user.name === name);
    }

    viewAll?(): IUser[] {
        return this.users;
    }

}