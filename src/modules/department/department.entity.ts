import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({ unique: true })
    name: string;
    @Column()
    image: string;
}