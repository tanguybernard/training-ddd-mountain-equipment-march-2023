import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "organization"})
export class Organization {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string
}
