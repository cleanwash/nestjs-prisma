import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service.js';
import { get } from 'http';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService:BoardService) {}

    @Get('/all')
    getAllBoards() {
        return this.boardService.getAllBoards()
    }
}
