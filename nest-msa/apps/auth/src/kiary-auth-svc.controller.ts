import { Controller, Get } from '@nestjs/common';
import { KiaryAuthSvcService } from './kiary-auth-svc.service';

@Controller()
export class KiaryAuthSvcController {
  constructor(private readonly kiaryAuthSvcService: KiaryAuthSvcService) {}

  @Get()
  getHello(): string {
    return this.kiaryAuthSvcService.getHello();
  }
}
