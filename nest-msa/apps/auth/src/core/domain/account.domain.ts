import { UserDomain } from './user.domain';
import { PasswordDomain } from './password.domain';
import { ProviderDomain } from './provider.domain';

export interface AccountDomain {
  accountId: number;
  userId: number;
  email: string;
  user?: UserDomain;
  password?: PasswordDomain;
  providers?: ProviderDomain[];
  createdAt: Date;
  deletedAt: Date;
}
