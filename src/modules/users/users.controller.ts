import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO, FindUserDTO } from './types/dtos';
import { DeleteUserQuery } from './types/dtos/delete-user-dto';
import { UsersService } from './users.service'

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Post('create')
    async create(@Body() creditUserResponse: CreateUserDTO) {
        return await this.userService.create(creditUserResponse)
    }
    @Get()
    async findAll(@Query() findUserDTO: FindUserDTO) {
        return await this.userService.findAll(findUserDTO)
    }
    @Delete()
    async delete(@Query() deleteUserQuery: DeleteUserQuery) {
        return await this.userService.delete(deleteUserQuery)
    }
} 
