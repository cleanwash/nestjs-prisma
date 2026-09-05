import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDTO } from './createUser.req.dto.js';
import { UpdateUserDTO } from './updateUser.req.dto.js';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post('')
    createUser(@Body() dto:CreateUserDTO) {
        return this.userService.createUser(dto)
    }

    @Get()
    getUser() {
        return this.userService.getUser()
    }

    @Get('/:userid')
    getUserDetail(@Param('userid') userId:string) {
        return this.userService.getUserDetail(userId)
    }

    @Patch('/:userid')
    updateUser(@Param('userid') userId:string, @Body() dto:UpdateUserDTO) {
        return this.userService.updateUser(userId, dto)
    }
}
