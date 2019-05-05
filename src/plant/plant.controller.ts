import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { PlantService } from './plant.service';
import { plant } from '../../output/entities/plant';


@Controller('plant')
export class PlantController {

    constructor(private service: PlantService) { }

    @Get('/getplants')
    get() {
        return this.service.getPlant();
    }
    @Post('/createcorporate')
    create(@Body() plant: plant) {
        return this.service.createPlant(plant);
    }
    @Put('/updateplant/:plant_code')
    update(@Param('plant_code') corporate_code: string, @Body() plantModel: Partial<plant>) {
        return this.service.updatePlant(corporate_code, plantModel);
    }
    @Delete('/deleteplant/:plant_code')
    delete(@Param('plant_code') plant_code: string) {
        this.service.deletePlant(plant_code);
        return { Deleted: true }
    }


}