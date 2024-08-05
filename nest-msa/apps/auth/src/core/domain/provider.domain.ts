import { AccountDomain } from './account.domain';

export interface ProviderDomain {
  providerId: number;
  accountId: number;
  account: AccountDomain;
  name: string;
  accessToken: string;
  accessTokenExpiresAt: Date;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  createdAt: Date;
}
