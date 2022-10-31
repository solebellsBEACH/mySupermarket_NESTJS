import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './types/dtos';
import { User } from './user.entity';
import { UsersService } from './users.service'

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
    constructor( private userService: UsersService) { }
    @Post('create')
    async create(@Body() creditUserResponse: CreateUserDTO) {
        const user = await this.userService.create(creditUserResponse)
        return { approved: true }
    }
} 
