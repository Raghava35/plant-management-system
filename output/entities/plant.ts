import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { cluster } from "./cluster";
import { department } from "./department";

import { ApiModelProperty } from '@nestjs/swagger';
@Entity("plant", { schema: "public" })
@Index("fki_fk_plant_cluster", ["clusterCode",])
@Index("fki_fk_plant_plant", ["parentPlantCode",])
export class plant {
    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
        primary: true,
        length: 50,
        name: "plant_code"
    })
    plant_code: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
        length: 100,
        name: "plant_name"
    })
    plant_name: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
        length: 100,
        name: "main_contact_person"
    })
    main_contact_person: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "contact_details"
    })
    contact_details: string | null;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 50,
        name: "m3_production_plant_code"
    })
    m3_production_plant_code: string | null;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 50,
        name: "plant_working_time"
    })
    plant_working_time: string | null;

    @ApiModelProperty()
    @Column("integer", {
        nullable: true,
        name: "plant_holidays"
    })
    plant_holidays: number | null;



    @ManyToOne(type => plant, plant => plant.plants, {})
    @JoinColumn({ name: 'parent_plant_code' })
    parentPlantCode: plant | null;


    @Column("text", {
        nullable: true,
        name: "plant_address"
    })
    plant_address: string | null;



    @ManyToOne(type => cluster, cluster => cluster.plants, {})
    @JoinColumn({ name: 'cluster_code' })
    clusterCode: cluster | null;



    @OneToMany(type => department, department => department.plantCode)
    departments: department[];


    @ApiModelProperty()
    @OneToMany(type => plant, plant => plant.parentPlantCode)
    plants: plant[];

}
