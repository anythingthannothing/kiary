import { Module } from '@nestjs/common';
import { JwtTokenService } from '@app/nest-msa-library/jwt-token.service';
import { LogoutController, LoginController } from './controllers';
import { LoginService } from './services/login.service';
import { GoogleLoginController } from './controllers/google-login.controller';
import { GithubLoginController } from './controllers/github-login.controller';
import { VerifyController } from './controllers/verify.controller';
import { RefreshController } from './controllers/refresh.controller';
import { CheckEmailController } from './controllers';
import { CheckEmailService } from '../user/services';
import { CheckEmailRepository } from '../../infra/persistence/repositories/user/check-email.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from '../../infra/entities';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  controllers: [
    LogoutController,
    LoginController,
    GoogleLoginController,
    GithubLoginController,
    VerifyController,
    RefreshController,
    CheckEmailController,
  ],
  providers: [
    JwtTokenService,
    LoginService,
    CheckEmailService,
    CheckEmailRepository,
  ],
})
export class AuthModule {}
