import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { corporate } from '../../output/entities/corporate';

@Injectable()
export class CorporateService {

    constructor(@InjectRepository(corporate) private corporateRepository: Repository<corporate>) { }
    async getCorporate(): Promise<corporate[]> {
        return await this.corporateRepository.find();
    }
    async createCorporate(corporate: corporate) {
        const corp = await this.corporateRepository.create(corporate);
        await this.corporateRepository.save(corp);
        return corp;
    }
    async updateCorporate(corporate_code: string, corporateModel: Partial<corporate>) {
        await this.corporateRepository.update({ corporate_code }, corporateModel);
        return this.corporateRepository.findOne({ corporate_code });
    }
    async deleteCorporate(corporate_code: string) {
        await this.corporateRepository.delete({ corporate_code });

    }

}
