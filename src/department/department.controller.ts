import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { department } from 'output/entities/department';


@Controller('department')
export class DepartmentController {

    constructor(private service: DepartmentService) { }

    @Get('/getdepartment')
    get() {
        return this.service.getDepartments();
    }
    @Post('/createdepartment')
    create(@Body() department: department) {
        return this.service.createDepartment(department);
    }
    @Put('/updatedepartment/:department_code')
    update(@Param('department_code') department_code: string, @Body() departmentModel: Partial<department>) {
        return this.service.updateDepartment(department_code, departmentModel);
    }
    @Delete('/deletedepartment/:department_code')
    delete(@Param('department_code') department_code: string) {
        this.service.deleteDepartment(department_code);
        return { Deleted: true }
    }


}