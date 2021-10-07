import { IUser } from './../../domain/entities/user-entity';
import { IsNotEmpty, Length, IsEmail, IsInt, Min, Max } from 'class-validator';

export class UserDTO implements IUser {

    @IsNotEmpty()
    @Length(2, 50)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(2)
    age: number;

}