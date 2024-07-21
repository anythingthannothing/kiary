import { Module } from '@nestjs/common';
import { JwtTokenService } from '@app/nest-msa-library/jwt-token.service';

@Module({
  imports: [],
  providers: [JwtTokenService],
})
export class AuthModule {}
