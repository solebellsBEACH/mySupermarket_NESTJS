import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO, FindUserDTO } from './types/dtos';
import { DeleteUserQuery } from './types/dtos/delete-user-dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
  async create(creditUserResponse: CreateUserDTO) {
    const { email, password, name } = creditUserResponse
    try {
      const user = this.userRepository.create({
        email, password, name
      })
      await this.userRepository.save(user)
      return { user, success: true }
    } catch (error) {
      return { user: null, success: false }
    }
  }
  async findAll(findUserQuery: FindUserDTO) {
    try {
      const users = await this.userRepository.findBy(findUserQuery)
      return { users, success: true }
    } catch (error) {
      return { user: null, success: false }
    }
  }
  async delete(deleteUserQuery: DeleteUserQuery) {
    try { 
        await this.userRepository.delete({ id: deleteUserQuery.uuid })
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}
}
