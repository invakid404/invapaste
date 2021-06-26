import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PastesModule } from './pastes/pastes.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), PastesModule],
})
export class AppModule {}
