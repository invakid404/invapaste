import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PastesController } from './pastes.controller';
import { PastesService } from './pastes.service';
import { PasteCollection, PasteSchema } from './schemas/paste.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PasteCollection, schema: PasteSchema }]),
  ],
  controllers: [PastesController],
  providers: [PastesService],
})
export class PastesModule {}
