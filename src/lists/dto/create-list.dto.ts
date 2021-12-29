import { Item } from "src/items/dto/item.interface";

export class CreateListDto {
    name: string;
    items: Item[] = [];
}
