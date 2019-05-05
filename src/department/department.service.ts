import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { department } from '../../output/entities/department';

@Injectable()
export class DepartmentService {

    constructor(@InjectRepository(department) private departmentRepository: Repository<department>) { }
    async getDepartments(): Promise<department[]> {
        return await this.departmentRepository.find();
    }
    async createDepartment(department: department) {
        const corp = await this.departmentRepository.create(department);
        await this.departmentRepository.save(corp);
        return corp;
    }
    async updateDepartment(department_code: string, departmentModel: Partial<department>) {
        await this.departmentRepository.update({ department_code }, departmentModel);
        return this.departmentRepository.findOne({ department_code });
    }
    async deleteDepartment(department_code: string) {
        await this.departmentRepository.delete({ department_code });

    }

}
