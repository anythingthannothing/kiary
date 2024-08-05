import { UserDomain } from '../../domain';

export interface ICreateUserRepository {
  execute(nickname: string): Promise<UserDomain>;
}
