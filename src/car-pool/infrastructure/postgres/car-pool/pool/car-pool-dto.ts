import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity({name: "car_pool"})
export class CarPoolDto {
    @PrimaryColumn('uuid') //or @PrimaryGeneratedColumn() for id generated
    id: string

    @Column({
        length: 100,
    })
    name: string
}
