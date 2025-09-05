import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chapter, ChapterDocument } from './schemas/chapter.schema';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';

@Injectable()
export class ChaptersService {
  constructor(@InjectModel(Chapter.name) private chapterModel: Model<ChapterDocument>) {}

  async findAll(): Promise<Chapter[]> {
    return this.chapterModel.find().exec();
  }

  async findOne(id: string): Promise<Chapter> {
    const chapter = await this.chapterModel.findById(id).exec();
    if (!chapter) throw new NotFoundException('Chapter not found');
    return chapter;
  }

  async create(createChapterDto: CreateChapterDto): Promise<Chapter> {
    const newChapter = new this.chapterModel(createChapterDto);
    return newChapter.save();
  }

  async update(id: string, updateChapterDto: UpdateChapterDto): Promise<Chapter> {
    const updated = await this.chapterModel.findByIdAndUpdate(id, updateChapterDto, { new: true }).exec();
    if (!updated) throw new NotFoundException('Chapter not found');
    return updated;
  }

  async remove(id: string): Promise<Chapter> {
    const deleted = await this.chapterModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException('Chapter not found');
    return deleted;
  }
}
