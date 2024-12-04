import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: Error | any) => void) {
        const auth = req.headers['authorization'];
        console.log("middleware çalıştı "+auth);
        next();
    }

}