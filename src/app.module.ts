import { MiddlewareConsumer, Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { BoardModule } from './board/board.module.js';
import { MypageModule } from './mypage/mypage.module.js';
import { LoggerMiddleWare } from './common/logger.middleware.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    BoardModule,
    MypageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer:MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('')
  }
}
