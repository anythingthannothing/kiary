export interface SaveRefreshTokenServiceInputDto {
  userId: number;
  refreshToken: string;
}

export interface ISaveRefreshTokenService {
  execute(params: SaveRefreshTokenServiceInputDto): Promise<void>;
}
