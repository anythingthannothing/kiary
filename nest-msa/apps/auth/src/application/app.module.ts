import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './config/app-config.module';

@Module({
  imports: [AuthModule, AppConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
