import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO, FindUserDTO } from './types/dtos';
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
} 
