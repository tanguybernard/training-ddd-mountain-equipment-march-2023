import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

export enum LeasingStatus {
    AVAILABLE = 'available',
    RENTED = 'rented',
}

@Entity({name: "car_leasing", schema: "leasing"}) //schema not supported by sqlite
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
        type: 'simple-enum',
        enum: LeasingStatus,
        default: LeasingStatus.AVAILABLE
    })
    status: string

}
