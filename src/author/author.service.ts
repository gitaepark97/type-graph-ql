import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Author, AuthorDocument } from './author.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async findById(_id) {
    return this.authorModel.findById(_id).lean();
  }

  async findMany() {
    return this.authorModel.find().lean();
  }

  async createAuthor(input) {
    return this.authorModel.create(input);
  }
}
