import { UserDomain } from './user.domain';
import { PasswordDomain } from './password.domain';

export interface AccountDomain {
  accountId: number;
  userId: number;
  email: string;
  user?: UserDomain;
  password?: PasswordDomain;
  provider: 'local' | 'google' | 'github' | 'kakao';
  createdAt: Date;
  deletedAt: Date;
}
