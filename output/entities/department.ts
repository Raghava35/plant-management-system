import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { plant } from "./plant";
import { section } from "./section";

import { ApiModelProperty } from '@nestjs/swagger';

@Entity("department", { schema: "public" })
@Index("fki_fk_department_plant", ["plantCode",])
export class department {

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
        primary: true,
        length: 50,
        name: "department_code"
    })
    department_code: string;


    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "department_name"
    })
    department_name: string | null;


    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "department_head"
    })
    department_head: string | null;


    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 50,
        name: "department_type"
    })
    department_type: string | null;



    @ApiModelProperty()
    @ManyToOne(type => plant, plant => plant.departments, {})
    @JoinColumn({ name: 'plant_code' })
    plantCode: plant | null;



    @ApiModelProperty()
    @OneToMany(type => section, section => section.departmentCode)
    sections: section[];

}
