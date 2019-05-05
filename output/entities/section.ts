import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { department } from "./department";
import { ApiModelProperty } from '@nestjs/swagger';


@Entity("section", { schema: "public" })
@Index("fki_fk_section_department", ["departmentCode",])
export class section {

    @ApiModelProperty()
    @Column("character varying", {
        nullable: false,
        primary: true,
        length: 50,
        name: "section_code"
    })
    section_code: string;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "section_name"
    })
    section_name: string | null;

    @ApiModelProperty()
    @Column("character varying", {
        nullable: true,
        length: 100,
        name: "section_head"
    })
    section_head: string | null;


    @ApiModelProperty()
    @ManyToOne(type => department, department => department.sections, { nullable: false, })
    @JoinColumn({ name: 'department_code' })
    departmentCode: department | null;

}
