import { Module } from '@nestjs/common';
import { JwtTokenService } from '@app/nest-msa-library/jwt-token.service';
import { LogoutController } from './controllers/logout.controller';

@Module({
  imports: [],
  providers: [JwtTokenService],
  controllers: [LogoutController],
})
export class AuthModule {}
