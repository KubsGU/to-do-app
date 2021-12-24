import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  @HttpCode(204)
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }

  @Get()
  findAll() {
    return this.listsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res) {
    let listToBeReturned = this.listsService.findOne(+id);
    if(listToBeReturned) {
      return res.status(200).send(listToBeReturned);
    }

    return res.status(404).send('not found');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto, @Res() res) {
    if(this.listsService.update(+id, updateListDto)) {
      return res.status(200).send("successfully updated");
    }
    return res.status(404).send("not found");
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res): void {
     if(this.listsService.remove(+id) ){
      return res.status(200).send("successfully deleted")
    }
    return res.status(404).send("not found");
  }
}
