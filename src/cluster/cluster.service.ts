import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {cluster} from '../../output/entities/cluster';

@Injectable()
export class ClusterService {
    constructor(@InjectRepository(cluster) private clusterRepository:Repository<cluster>){}

    async getCluster(): Promise<cluster[]>{
        return await this.clusterRepository.find();
     }

    async createCluster(cluster: cluster){
        const cluster_data = await this.clusterRepository.create(cluster);
        await this.clusterRepository.save(cluster_data);
        return cluster_data;
     }

     async updateCluster(cluster_code: string, clustermodel: Partial<cluster>) {
        await this.clusterRepository.update({ cluster_code }, clustermodel);
        return this.clusterRepository.findOne({ cluster_code });
    }

    
     async deleteCluster(cluster_code: string){
        await this.clusterRepository.delete({ cluster_code });
      }



}
 
