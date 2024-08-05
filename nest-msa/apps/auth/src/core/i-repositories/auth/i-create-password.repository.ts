import { PasswordDomain } from '../../domain';

export interface CreatePasswordRepositoryInputDto {
  hashedPassword: string;
  accountId: number;
}

export interface ICreatePasswordRepository {
  execute(dto: CreatePasswordRepositoryInputDto): Promise<PasswordDomain>;
}
