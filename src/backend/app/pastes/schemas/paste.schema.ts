import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PasteDocument = Paste & Document;

@Schema()
export class Paste {
  @Prop()
  content: string;
}

export const PasteSchema = SchemaFactory.createForClass(Paste);

export const PasteCollection = 'pastes';
