import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ClusterService } from './cluster.service';
import { cluster } from 'output/entities/cluster';


@Controller('cluster')
export class ClusterController {

    constructor(private service: ClusterService) { }

    @Get('/gercluster')
    get(){
         return this.service.getCluster();
    }

    @Post('/createcluster')
    create(@Body() cluster: cluster) {
        return this.service.createCluster(cluster);
    }

    @Put('/updatecluster/:cluster_code')
    update(@Param('cluster_code') cluster_code: string, @Body() clusterModel: Partial<cluster>) {
        return this.service.updateCluster(cluster_code, clusterModel);
    }

    @Delete('/deletecluster')
    delete(@Param('cluster_code') cluster_code: string) {
        this.service.deleteCluster(cluster_code);
        return { Deleted: true }
    }



  
}
