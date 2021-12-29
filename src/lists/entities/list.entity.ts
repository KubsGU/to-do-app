import { Item } from "src/items/entities/item.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class List{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @ManyToOne(type => User, user => user.lists)
    user: User;

    @OneToMany(type => Item, item => item.list)
    items: Item[];
}