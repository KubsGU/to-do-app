import { List } from "src/lists/entities/list.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isChecked: boolean;

    @Column()
    Description: string;

    @Column()
    IsImportant: boolean;

    @ManyToOne(type => List, list => list.items)
    list: List
}