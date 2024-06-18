import { Module } from '@nestjs/common';
import { KiaryAuthSvcController } from './kiary-auth-svc.controller';
import { KiaryAuthSvcService } from './kiary-auth-svc.service';

@Module({
  imports: [],
  controllers: [KiaryAuthSvcController],
  providers: [KiaryAuthSvcService],
})
export class KiaryAuthSvcModule {}
