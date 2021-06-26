import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { PastesModule } from './pastes/pastes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/invapaste'),
    PastesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
