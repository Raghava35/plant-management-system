import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { cluster } from "./cluster";
import { ApiModelProperty } from '@nestjs/swagger';

@Entity("corporate", { schema: "public" })
export class corporate {

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
        primary: true,
        length: 50,
        name: "corporate_code"
    })
    corporate_code: string;


    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "corporate_name"
    })
    corporate_name: string | null;


    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "corporate_details"
    })
    corporate_details: string | null;


    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "contact_person"
    })
    contact_person: string | null;


    @ApiModelProperty()
    @Column("text", {
        nullable: true,
        name: "corporate_address"
    })
    corporate_address: string | null;



    @OneToMany(type => cluster, cluster => cluster.corporateCode)
    clusters: cluster[];

}
