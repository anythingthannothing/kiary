import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../../../entities';
import {
  CreateAccountRepositoryInputDto,
  ICreateAccountRepository,
} from '../../../../core/i-repositories/auth/i-create-account.repository';

export class CreateAccountRepository implements ICreateAccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async execute(dto: CreateAccountRepositoryInputDto): Promise<AccountEntity> {
    return await this.accountRepository.save({
      email: dto.email,
      userId: dto.userId,
      createdAt: new Date(),
    });
  }
}
