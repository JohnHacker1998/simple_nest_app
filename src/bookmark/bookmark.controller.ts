import { Body, Controller, Param, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { addBookmarkDTO } from './dtos/bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post('add/:id')
  addBookmark(@Body() bookmark: addBookmarkDTO, @Param('id') id: string) {
    return this.bookmarkService.createBookmark(bookmark, id);
  }
}
