import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { BoardModule } from './board/board.module.js';
import { MypageModule } from './mypage/mypage.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    BoardModule,
    MypageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
