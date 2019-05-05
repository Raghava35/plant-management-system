import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { section } from 'output/entities/section';
import { department } from 'output/entities/department';
import { corporate } from 'output/entities/corporate';
import { plant } from 'output/entities/plant';
import { cluster } from 'output/entities/cluster';
import { ClusterService } from './cluster/cluster.service';
import { ClusterController } from './cluster/cluster.controller';
import { CorporateService } from './corporate/corporate.service';
import { CorporateController } from './corporate/corporate.controller';
import { PlantService } from './plant/plant.service';
import { PlantController } from './plant/plant.controller';
import { DepartmentService } from './department/department.service';
import { DepartmentController } from './department/department.controller';
import { SectionService } from './section/section.service';
import { SectionController } from './section/section.controller';


@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([section, department, corporate, plant, cluster])],
  controllers: [ClusterController, CorporateController, PlantController, DepartmentController, SectionController],
  providers: [AppService, ClusterService, CorporateService, PlantService, DepartmentService, SectionService],



})
export class AppModule { }
