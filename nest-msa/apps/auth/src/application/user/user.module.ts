import { Module } from '@nestjs/common';
import { CheckEmailService } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from '../../infra/entities';
import { CheckEmailRepository } from '../../infra/persistence/repositories/user/check-email.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  controllers: [],
  providers: [CheckEmailService, CheckEmailRepository],
})
export class UserModule {}
