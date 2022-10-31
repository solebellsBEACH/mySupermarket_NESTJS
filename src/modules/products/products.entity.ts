import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: number
    @Column()
    name: string;
    @Column()
    unitType: 'unit'|'peso'|'ml';
    @Column()
    image: string;
    @Column()
    brand: string;
    @Column()
    price: number;
    // @Column()
    // department: string;
}