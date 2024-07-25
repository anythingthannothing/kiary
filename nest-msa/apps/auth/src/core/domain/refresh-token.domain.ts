export interface RefreshTokenDomain {
  refreshTokenId: string;
  userId: number;
  token: string;
  expiresAt: Date;
  createdAt: Date;
}
