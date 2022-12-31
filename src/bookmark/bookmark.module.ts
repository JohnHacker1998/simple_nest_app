import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from 'src/typeorm/entities/Bookmark.entity';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';
import { User } from 'src/typeorm/entities/User.entity';

@Module({
  providers: [BookmarkService],
  controllers: [BookmarkController],
  imports: [TypeOrmModule.forFeature([User, Bookmark])],
})
export class BookmarkModule {}
