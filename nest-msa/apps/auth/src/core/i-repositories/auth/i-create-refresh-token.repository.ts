import { SaveRefreshTokenServiceInputDto } from '../../i-services/i-save-refresh-token.service';

export interface ICreateRefreshTokenRepository {
  execute(dto: SaveRefreshTokenServiceInputDto): Promise<void>;
}
