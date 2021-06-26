import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class BaseSchema {
  @Prop({ default: () => new Types.ObjectId().toHexString() })
  _id: string;
}
