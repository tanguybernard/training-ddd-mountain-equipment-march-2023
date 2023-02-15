import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "car", schema: "registration"})
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
    brand: string


    @Column({
        length: 100,
        nullable: false,
        default: 'cannotBeRented'
    })
    status: string

}
