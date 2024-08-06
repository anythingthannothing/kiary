import { Module } from '@nestjs/common';
import { JwtTokenService } from '@app/nest-msa-library/jwt-token.service';
import {
  LogoutController,
  LoginController,
  SignUpController,
} from './controllers';
import { LoginService } from './services/login.service';
import { GoogleLoginController } from './controllers/google-login.controller';
import { GithubLoginController } from './controllers/github-login.controller';
import { VerifyController } from './controllers/verify.controller';
import { RefreshController } from './controllers/refresh.controller';
import { CheckEmailController } from './controllers';
import { CheckEmailService } from '../user/services';
import { CheckEmailRepository } from '../../infra/persistence/repositories/auth/check-email.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AccountEntity,
  PasswordEntity,
  RefreshTokenEntity,
  UserEntity,
} from '../../infra/entities';
import { BcryptService } from './services/bcrypt.service';
import { CreateAccountRepository } from '../../infra/persistence/repositories/auth/create-account.repository';
import { CreatePasswordRepository } from '../../infra/persistence/repositories/auth/create-password.repository';
import { CreateUserRepository } from '../../infra/persistence/repositories/user/create-user.repository';
import { SignUpService } from './services/sign-up.service';
import { SaveRefreshTokenService } from './services/save-refresh-token.service';
import { CreateRefreshTokenRepository } from '../../infra/persistence/repositories/auth/create-refresh-token.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      PasswordEntity,
      UserEntity,
      RefreshTokenEntity,
    ]),
  ],
  controllers: [
    SignUpController,
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
    BcryptService,
    CreateAccountRepository,
    CreatePasswordRepository,
    CreateUserRepository,
    SignUpService,
    SaveRefreshTokenService,
    CreateRefreshTokenRepository,
  ],
})
export class AuthModule {}
