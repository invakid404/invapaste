import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { NotFoundInterceptor } from './lib/interceptors/notFound.interceptor';
import { PastesModule } from './pastes/pastes.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), PastesModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: NotFoundInterceptor,
    },
  ],
})
export class AppModule {}
