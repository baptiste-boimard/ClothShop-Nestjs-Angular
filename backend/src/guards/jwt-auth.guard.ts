import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

interface JwtPayload {
  userId: string;
  email: string;
  role: string;
}

interface AuthenticatedRequest extends Request {
  user?: any;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authHeader = request.headers.authorization;

    if (!authHeader) return false;

    const token = authHeader.split(' ')[1];

    try {
      const payload: JwtPayload = this.jwtService.verify<JwtPayload>(token, {
        secret: process.env.SECRET_KEY,
      });
      request.user = payload;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
