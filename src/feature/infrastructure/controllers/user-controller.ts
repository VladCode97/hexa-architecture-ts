import { Inject } from 'typedi';
import { UserServiceHttp } from './../services/user-service-http';
import { JsonController, Get, Res, Post, Body } from 'routing-controllers';
import { Response } from 'express';
import { UserDTO } from '../DTOS/user-dto';

@JsonController('/User')
export class UserController {


    constructor(@Inject('userHttp.service') private readonly userServiceHttp: UserServiceHttp) { }

    @Get('/GetUsers')
    public async getUsers(@Res() response: Response): Promise<Response> {
        return response.json({ message: await this.userServiceHttp.viewAll() });
    }

    @Post('/CreateUsers')
    public async createUsers(@Body() userDTO: UserDTO, @Res() response: Response): Promise<Response> {
        return response.json({ message: await this.userServiceHttp.createAll(userDTO) });
    }

}   