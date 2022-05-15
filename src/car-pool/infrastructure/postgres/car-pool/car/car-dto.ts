import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "car"})
export default class CarDto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        length: 100,
    })
    pool_id: string

    @Column({
        length: 100,
    })
    name: string
}
