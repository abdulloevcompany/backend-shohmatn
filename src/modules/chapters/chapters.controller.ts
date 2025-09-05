import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ChaptersService } from 'src/modules/chapters/chapters.service';
import { CreateChapterDto } from 'src/modules/chapters/dto/create-chapter.dto';
import { UpdateChapterDto } from 'src/modules/chapters/dto/update-chapter.dto';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Get()
  async findAll() {
    return this.chaptersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.chaptersService.findOne(id);
  }

  @Post()
  async create(@Body() createChapterDto: CreateChapterDto) {
    return this.chaptersService.create(createChapterDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChapterDto: UpdateChapterDto) {
    return this.chaptersService.update(id, updateChapterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.chaptersService.remove(id);
  }
}
