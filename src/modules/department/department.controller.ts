import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './department.service';
import { CreateDepartmentDTO } from './types/dtos/create-department-dto';
import { DeleteDepartmentQuery } from './types/dtos/delete-department-dto';
import { FindDepartmentQuery } from './types/dtos/findAll-department-dto';
import { PutDepartmentDTO } from './types/dtos/put-department-dto';

@ApiTags('Departamentos')
@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) { }
    @Post('create')
    async create(@Body() creditDepartmentResponse: CreateDepartmentDTO) {
        return await this.departmentService.create(creditDepartmentResponse)
    }
    @Get()
    async findAll(@Query() findDepartmentDTO: FindDepartmentQuery) {
        return await this.departmentService.findAll(findDepartmentDTO)
    }
    @Delete()
    async delete(@Query() deleteDepartmentQuery: DeleteDepartmentQuery) {
        return await this.departmentService.delete(deleteDepartmentQuery)
    }
    @Put()
    async put(@Body() putDepartmentDTO: PutDepartmentDTO) {
        return await this.departmentService.put( putDepartmentDTO)
    }
}
