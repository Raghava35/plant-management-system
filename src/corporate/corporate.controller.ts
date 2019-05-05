import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { CorporateService } from './corporate.service';
import { corporate } from 'output/entities/corporate';


@Controller('corporate')
export class CorporateController {

    constructor(private service: CorporateService) { }

    @Get('/getcorporate')
    get() {
        return this.service.getCorporate();
    }
    @Post('/createcorporate')
    create(@Body() corporate: corporate) {
        return this.service.createCorporate(corporate);
    }
    @Put('/updatecorporate/:corporate_code')
    update(@Param('corporate_code') corporate_code: string, @Body() corporateModel: Partial<corporate>) {
        return this.service.updateCorporate(corporate_code, corporateModel);
    }
    @Delete('/deletecorporate/:corporate_code')
    delete(@Param('corporate_code') corporate_code: string) {
        this.service.deleteCorporate(corporate_code);
        return { Deleted: true }
    }


}