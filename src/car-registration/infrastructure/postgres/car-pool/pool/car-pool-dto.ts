import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import CarDto from "../car/car-dto";

@Entity({name: "car_pool", schema: "registration"})
export class CarPoolDto {
    @PrimaryColumn('uuid') //or @PrimaryGeneratedColumn() for id generated
    id: string

    @Column({
        length: 100,
    })
    name: string

    @OneToMany(() => CarDto, car => car.poolId)
    cars: CarDto[];
}
