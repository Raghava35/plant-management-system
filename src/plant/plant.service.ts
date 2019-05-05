import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { corporate } from '../../output/entities/corporate';
import { plant } from 'output/entities/plant';

@Injectable()
export class PlantService {

    constructor(@InjectRepository(plant) private plantRepository: Repository<plant>) { }
    async getPlant(): Promise<plant[]> {
        return await this.plantRepository.find();
    }
    async createPlant(plantModel: plant) {
        const plant = await this.plantRepository.create(plantModel);
        await this.plantRepository.save(plant);
        return plant;
    }
    async updatePlant(plant_code: string, plantModel: Partial<plant>) {
        await this.plantRepository.update({ plant_code }, plantModel);
        return this.plantRepository.findOne({ plant_code });
    }
    async deletePlant(plant_code: string) {
        await this.plantRepository.delete({ plant_code });

    }

}
