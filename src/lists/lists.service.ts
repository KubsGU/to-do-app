import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { IList } from './dto/list.interface';
import { UpdateListDto } from './dto/update-list.dto';

var ToDoLists: IList[] = [];

@Injectable()
export class ListsService {

  public create(createListDto: CreateListDto) {
    ToDoLists.push(createListDto);
    console.log(createListDto);
    console.log(ToDoLists);
    return 'This action adds a new list';
  }

  public findAll() {
    return ToDoLists;
  }

  public findOne(id: number) {
    return ToDoLists.find(x => x.id === id);
  }

  public update(id: number, updateListDto: UpdateListDto): boolean {
    let listToBeUpdatedIndex = ToDoLists.findIndex(x => x.id === id)
    if (listToBeUpdatedIndex !== -1) {
      ToDoLists[listToBeUpdatedIndex].name = updateListDto.name;
      return true;
    }
    return false;
  }

  public remove(id: number): boolean {
    let listToBeRemoved = ToDoLists.findIndex(x => x.id === id);
    if(listToBeRemoved !== -1) {
      ToDoLists.splice(listToBeRemoved,1);
      return true;
    }
    else {
      return false;
    }
  }
}
