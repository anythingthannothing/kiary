import { ConflictException, Inject, Injectable } from '@nestjs/common';
import {
  ISignUpService,
  SignupServiceInputDto,
} from '../../../core/i-services/i-sign-up.service';
import { UserDomain } from '../../../core/domain';
import { IEncryptService } from '../../../core/i-services/i-encrypt-service';
import { BcryptService } from './bcrypt.service';
import { CheckEmailRepository } from '../../../infra/persistence/repositories/auth/check-email.repository';
import { ICheckEmailRepository } from '../../../core/i-repositories/auth';
import { ICreateAccountRepository } from '../../../core/i-repositories/auth/i-create-account.repository';
import { CreateAccountRepository } from '../../../infra/persistence/repositories/auth/create-account.repository';
import { CreateUserRepository } from '../../../infra/persistence/repositories/user/create-user.repository';
import { ICreateUserRepository } from '../../../core/i-repositories/user/i-create-user.repository';
import { ICreatePasswordRepository } from '../../../core/i-repositories/auth/i-create-password.repository';
import { CreatePasswordRepository } from '../../../infra/persistence/repositories/auth/create-password.repository';

@Injectable()
export class SignUpService implements ISignUpService {
  constructor(
    @Inject(CheckEmailRepository)
    private readonly checkEmailHandler: ICheckEmailRepository,
    @Inject(BcryptService) private readonly encryptHandler: IEncryptService,
    @Inject(CreatePasswordRepository)
    private readonly createPasswordHandler: ICreatePasswordRepository,
    @Inject(CreateUserRepository)
    private readonly createUserHandler: ICreateUserRepository,
    @Inject(CreateAccountRepository)
    private readonly createAccountHandler: ICreateAccountRepository,
  ) {}

  async execute(dto: SignupServiceInputDto): Promise<UserDomain> {
    const { email, password, nickname } = dto;

    const isEmailDuplicate = await this.checkEmailHandler.execute(email);

    if (isEmailDuplicate) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await this.encryptHandler.hash(password);

    const user = await this.createUserHandler.execute(nickname);
    const account = await this.createAccountHandler.execute({
      email,
      hashedPassword,
      userId: user.userId,
    });
    const passwordEntity = this.createPasswordHandler.execute({
      accountId: account.accountId,
      hashedPassword,
    });

    return user;
  }
}
