import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {stat} from "fs";

@Entity({name: "car", schema: "leasing"})
export default class CarDto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        length: 100,
    })
    name: string

    @Column({
        length: 100,
        nullable: true
    })
    type: string


    @Column({
        length: 100,
        nullable: true
    })
    status: string

}
