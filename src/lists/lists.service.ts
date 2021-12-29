import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {

  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>
  ) {}

  async create(createListDto: CreateListDto) {
    const list = new List();
    const user = new User();
    user.id = 2;
    user.isActive = true;
    user.firstName = 'Kuba';
    user.lastName = 'Jelonek';
    user.lists = [];
    list.name = createListDto.name;
    list.user = user;
    return await this.listRepository.save(list);
  }

  async findAll() {
    return await this.listRepository.find();
  }

  async findAllByUserId(userId: number) {
    return await this.listRepository.find({where: {user:userId}});
  }

  async findOne(id: number) {
    return await this.listRepository.findOne({where: {id:id}});
  }

  async patch(id: number, updateListDto: UpdateListDto) {
    await this.listRepository.update({id},updateListDto);
  }

  async remove(id: number) {
    await this.listRepository.delete(id);
  }
}
