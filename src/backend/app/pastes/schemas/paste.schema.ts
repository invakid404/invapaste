import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from '../../lib/mongoose/base.schema';

export type PasteDocument = Paste & Document;

@Schema()
export class Paste extends BaseSchema {
  @Prop()
  content: string;
}

export const PasteSchema = SchemaFactory.createForClass(Paste);

export const PasteCollection = 'pastes';
