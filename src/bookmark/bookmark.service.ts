import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import { Bookmark } from 'src/typeorm/entities/Bookmark.entity';
import { BookmarkType } from 'src/utils/bookmark.type';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
  ) {}

  async createBookmark(bookmark: BookmarkType, bookmarkID: string) {
    const foundUser = await this.userRepository.findOne({
      where: {
        id: bookmarkID,
      },
    });

    if (!foundUser) return 'User is not found';
    let bk = this.bookmarkRepository.create({
      ...bookmark,
    });
    bk.user = foundUser;
    await this.bookmarkRepository.save(bk);
    return 'Bookmark created successfully!!';
  }
}
