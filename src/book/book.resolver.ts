import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';

import { Author } from '../author/author.schema';
import { AuthorService } from '../author/author.service';
import { Book, CreateBookInput, FindBookInput } from './book.schema';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  @Query(() => [Book])
  async books() {
    return this.bookService.findMany();
  }

  @Query(() => Book)
  async book(@Args('input') { _id }: FindBookInput) {
    return this.bookService.findById(_id);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
