import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
    use(req:Request, res:Response, next:() =>void) {
        console.log(`${req.method} ${req.url}`)
        next() //middleware는 반드시 next() 추가 
    }
}