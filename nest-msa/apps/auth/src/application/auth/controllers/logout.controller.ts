import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class LogoutController {
  constructor(private readonly configService: ConfigService) {}
  @Get('auth/logout')
  @HttpCode(204)
  async logout(@Res({ passthrough: true }) res: Response) {
    res.cookie('Authorization', '', {
      maxAge: 0,
      domain:
        this.configService.get<string>('NODE_ENV') === 'production'
          ? '.kiary.com'
          : '',
    });

    res.cookie('Refresh-Token', '', {
      maxAge: 0,
      domain:
        this.configService.get<string>('NODE_ENV') === 'production'
          ? '.kiary.com'
          : '',
    });

    return;
  }
}
