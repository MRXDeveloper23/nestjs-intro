import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard';

@Controller('users')
export class UserController {
  constructor() {}
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return {
      user: req.user,
    };
  }
}
