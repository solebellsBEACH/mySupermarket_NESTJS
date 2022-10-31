import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDTO } from './types/dtos/create-department-dto';
import { DeleteDepartmentQuery } from './types/dtos/delete-department-dto';
import { FindDepartmentQuery } from './types/dtos/findAll-department-dto';
import { PutDepartmentDTO } from './types/dtos/put-department-dto';

@Injectable()
export class DepartmentService {
    constructor(@InjectRepository(Department) private departmentRepository: Repository<Department>) { }
    async create(createDepartmentResponse: CreateDepartmentDTO) {
        try {
            const department = this.departmentRepository.create({ ...createDepartmentResponse })
            await this.departmentRepository.save(department)
            return { department, success: true }
        } catch (error) {
            return { department: null, success: false }
        }
    }
    async findAll(findAllDepartmentQuery: FindDepartmentQuery) {
        try {
            const department = await this.departmentRepository.findBy(findAllDepartmentQuery)

            return { department, success: true }
        } catch (error) {
            return { department: null, success: false }
        }
    }
    async delete(deleteDepartmentQuery: DeleteDepartmentQuery) {
        try {
            await this.departmentRepository.delete({ ...deleteDepartmentQuery })
            return { success: true }
        } catch (error) {
            return { success: false }
        }
    }
    async put(putDepartmentDTO: PutDepartmentDTO) {
        const { image, name, } = putDepartmentDTO
        try {
            await this.departmentRepository.update({ id: putDepartmentDTO.id }, { image, name })
            return { success: true, department: { image, name } }
        } catch (error) {
            return { success: false, department: null }
        }
    }
}
