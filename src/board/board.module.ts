import { Module } from '@nestjs/common';
import { BoardService } from './board.service.js';
import { BoardController } from './board.controller.js';
import { MypageModule } from '../mypage/mypage.module.js';

@Module({
  imports:[MypageModule],
  providers: [BoardService],
  controllers: [BoardController],
  exports:[BoardService],
}
)
export class BoardModule {}
