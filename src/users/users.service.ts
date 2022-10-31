import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './types/dtos';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  async create(creditUserResponse: CreateUserDTO) {
    console.log('djdjdjj')
    const { email, password, name } = creditUserResponse
    const user = this.userRepository.create({
      email, password, name
    })
    console.log(user)
    await this.userRepository.save(this.userRepository.create(user))
  }

}
