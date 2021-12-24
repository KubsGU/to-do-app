import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { IList } from './dto/list.interface';
import { UpdateListDto } from './dto/update-list.dto';

var ToDoLists: IList[] = [];

@Injectable()
export class ListsService {

  create(createListDto: CreateListDto) {
    ToDoLists.push(createListDto);
    console.log(createListDto);
    console.log(ToDoLists);
    return 'This action adds a new list';
  }

  findAll() {
    return ToDoLists;
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
