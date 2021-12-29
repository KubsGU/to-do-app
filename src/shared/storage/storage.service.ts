import { Injectable } from '@nestjs/common';
import { Item } from 'src/items/dto/item.interface';
import { List } from 'src/lists/dto/list.interface';

@Injectable()
export class StorageService {

    saveListToStorage(listId: number, list: List) : void {
        localStorage.setItem(listId.toString(),JSON.stringify(list));
    }

    getListFromStorageByListId(listId: number): List {
        let list: List = JSON.parse(localStorage.getItem(listId.toString()));

        return list;
    }

    // getListsFromStorageByUserId(): List[] {

    // }

    getItemFromStorageByListId(listId: number, itemId: number): Item {
        let list = this.getListFromStorageByListId(listId);
        return list.items.find(item => item.Id === itemId);
    }

    saveItemToStorage(listId: number, itemId: number): void {

    }
}
