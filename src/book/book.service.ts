import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book, BookDocument, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];

  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findMany() {
    return this.bookModel.find().lean();
  }

  async findById(_id) {
    return this.bookModel.findById(_id).lean();
  }

  async findByAuthorId(authorId) {
    return this.bookModel.find({ author: authorId });
  }

  async createBook(book: CreateBookInput) {
    return this.bookModel.create(book);
  }
}
