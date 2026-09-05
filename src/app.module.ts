import { MiddlewareConsumer, Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { BoardModule } from './board/board.module.js';
import { MypageModule } from './mypage/mypage.module.js';
import { LoggerMiddleWare } from './common/logger.middleware.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UserModule } from './user/user.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    PrismaModule,
    BoardModule,
    MypageModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('')
  }
}
