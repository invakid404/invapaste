import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Paste, PasteCollection, PasteDocument } from './schemas/paste.schema';

@Injectable()
export class PastesService {
  constructor(
    @InjectModel(PasteCollection)
    private readonly pasteModel: Model<PasteDocument>,
  ) {}

  async create(content: string): Promise<Paste> {
    const createdPaste = new this.pasteModel({ content });

    return createdPaste.save();
  }

  async findById(id: string): Promise<Paste> {
    return this.pasteModel.findById(id).lean();
  }
}
