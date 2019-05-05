import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { section } from '../../output/entities/section';

@Injectable()
export class SectionService {

    constructor(@InjectRepository(section) private sectionRepository: Repository<section>) { }
    async getsections(): Promise<section[]> {
        return await this.sectionRepository.find();
    }
    async createSection(section: section) {
        const corp = await this.sectionRepository.create(section);
        await this.sectionRepository.save(corp);
        return corp;
    }
    async updateSection(section_code: string, sectionModel: Partial<section>) {
        await this.sectionRepository.update({ section_code }, sectionModel);
        return this.sectionRepository.findOne({ section_code });
    }
    async deleteSection(section_code: string) {
        await this.sectionRepository.delete({ section_code });

    }

}
