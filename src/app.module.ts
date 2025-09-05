import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersModule } from './modules/chapters/chapters.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://abdulloevcompany:62MuVYwACciOxANu@abdulloevcluster.dpyzy0e.mongodb.net/?retryWrites=true&w=majority&appName=abdulloevcluster',
    ),
    ChaptersModule,
    // сюда потом добавим модули: ChaptersModule, UsersModule и т.д.
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
