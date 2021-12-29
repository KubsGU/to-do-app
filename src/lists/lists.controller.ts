import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  async create(@Body() createListDto: CreateListDto) {
    return await this.listsService.create(createListDto);
  }

  @ApiQuery({
    name: "userId",
    type: String,
    required: false
  })
  @Get()
  async findAll(@Query('userId') userId?: string) {
    if(userId)
      return await this.listsService.findAllByUserId(+userId);
    return await this.listsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.listsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return await this.listsService.patch(+id, updateListDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.listsService.remove(+id);
  }
}
