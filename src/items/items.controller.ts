import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('lists/:listId/items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService){}

  @Post()
  create(@Param('listId') listId: string, @Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(+listId, createItemDto);
  }

  @Get()
  findAll(@Param('listId') listId: string) {
    console.log(listId);
    return this.itemsService.findAll(+listId);
  }

  @Get(':id')
  findOne(@Param('listId') listId: string, @Param('id') id: string) {
    return this.itemsService.findOne(+listId, +id);
  }

  @Patch(':id')
  update(@Param('listId') listId: string, @Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+listId, +id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('listId') listId: string, @Param('id') id: string) {
    return this.itemsService.remove(+listId, +id);
  }
}
