import { Module } from '@nestjs/common';
import { UserModule } from './application/modules/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class KiaryAuthSvcModule {}
