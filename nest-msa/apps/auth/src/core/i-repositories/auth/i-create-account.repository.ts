import { AccountDomain } from '../../domain';

export interface CreateAccountRepositoryInputDto {
  email: string;
  hashedPassword: string;
  userId: number;
}

export interface ICreateAccountRepository {
  execute(dto: CreateAccountRepositoryInputDto): Promise<AccountDomain>;
}
