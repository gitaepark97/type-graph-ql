import { Module } from '@nestjs/common';

import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { AuthorService } from '../author/author.service';

@Module({
  providers: [BookService, BookResolver, AuthorService],
})
export class BookModule {}
