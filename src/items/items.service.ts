import { Injectable } from '@nestjs/common';
import { StorageService } from 'src/shared/storage/storage.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  /**
   *
   */
  constructor(readonly storageService: StorageService) {
    
    
  }
  create(listId: number, createItemDto: CreateItemDto) {
    if(listId) {
      let list = this.storageService.getListFromStorageByListId(listId);
      if(list) {
        list.items.push(createItemDto);
        this.storageService.saveListToStorage(listId, list);
      }
    }
    return 'This action adds a new item';
  }

  findAll(listId: number) {
    return `This action returns all items`;
  }

  findOne(listId: number, id: number) {
    return this.storageService.getItemFromStorageByListId(listId,id);
  }

  update(listId: number, id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(listId: number, id: number) {
    return `This action removes a #${id} item`;
  }
}
