import { Item } from "src/items/dto/item.interface";

export interface List{
    readonly id: number,
    ownerId: number
    name: string,
    items: Item[]
}