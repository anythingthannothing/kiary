import { ICheckEmailRepository } from '../../../../core/i-repositories/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../../../entities';

export class CheckEmailRepository implements ICheckEmailRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async execute(email): Promise<boolean> {
    return await this.accountRepository.exists({ where: { email } });
  }
}
