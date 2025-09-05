import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersService } from './chapters.service';
import { Chapter, ChapterSchema } from './schemas/chapter.schema';
import { ChaptersController } from './chapters.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }])],
  controllers: [ChaptersController],
  providers: [ChaptersService],
})
export class ChaptersModule {}
