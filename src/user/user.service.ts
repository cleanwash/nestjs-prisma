import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDTO } from './createUser.req.dto.js';
import { UpdateUserDTO } from './updateUser.req.dto.js';

@Injectable()
export class UserService {
    constructor(private readonly prismaService:PrismaService) {}

    async createUser(dto:CreateUserDTO) {

        return this.prismaService.user.create({
            data: {
                email:dto.email,
                name:dto.name
            }
        })
    }

    async getUser() {
        const user = await this.prismaService.user.findMany()
        return user
    }

    async getUserDetail(userId:string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id:Number(userId)
            },
            select: {
                email:true
            }
        })
        return user
    }

    async updateUser(userId:string, dto:UpdateUserDTO) {

        const user = await this.prismaService.user.update({
            where: {
                id:Number(userId),
            },
            data: {
                name:dto.name
            }
        })
        return user
    }
}
