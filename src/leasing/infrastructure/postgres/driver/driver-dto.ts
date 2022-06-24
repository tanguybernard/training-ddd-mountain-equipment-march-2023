import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import CarDto from "../car/car-dto";

@Entity({name: "driver", schema: "leasing"})
export default class DriverDto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        length: 100,
    })
    name: string

    @Column({
        nullable: false
    })
    age: number

    @OneToOne(() => CarDto)
    @JoinColumn()
    car: CarDto;


}
