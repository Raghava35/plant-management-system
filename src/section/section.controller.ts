import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { SectionService } from './section.service';
import { section } from 'output/entities/section';


@Controller('section')
export class SectionController {

    constructor(private service: SectionService) { }

    @Get('/getplants')
    get() {
        return this.service.getsections();
    }
    @Post('/createsection')
    create(@Body() section: section) {
        return this.service.createSection(section);
    }
    @Put('/updatesection/:section_code')
    update(@Param('section_code') section_code: string, @Body() sectionModel: Partial<section>) {
        return this.service.updateSection(section_code, sectionModel);
    }
    @Delete('/deletecorporate/:section_code')
    delete(@Param('section_code') section_code: string) {
        this.service.deleteSection(section_code);
        return { Deleted: true }
    }


}