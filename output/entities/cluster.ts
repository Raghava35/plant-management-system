import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {corporate} from "./corporate";
import {plant} from "./plant";
import { ApiModelProperty } from '@nestjs/swagger';


@Entity("cluster", { schema: "public" })
@Index("fki_fk_cluster_corporate", ["corporateCode",])
export class cluster {
    @ApiModelProperty()
    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"cluster_code"
        })
    cluster_code:string;
        
    @ApiModelProperty()
    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"cluster_name"
        })
    cluster_name:string | null;
        
    @ApiModelProperty()
    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"cluster_details"
        })
    cluster_details:string | null;
        
    @ApiModelProperty()
    @Column("text",{ 
        nullable:true,
        name:"cluster_address"
        })
    cluster_address:string | null;
        
    @ApiModelProperty()
    @Column("character varying",{ 
        nullable:true,
        length:100,
        name:"contact_person"
        })
    contact_person:string | null;
        
 
    @ApiModelProperty()
    @ManyToOne(type=>corporate, corporate=>corporate.clusters,{  })
    @JoinColumn({ name:'corporate_code'})
    corporateCode:corporate | null;


   
    @OneToMany(type=>plant, plant=>plant.clusterCode)
    plants:plant[];
    
}
