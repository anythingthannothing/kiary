import { Inject, Injectable } from '@nestjs/common';
import {
  ISaveRefreshTokenService,
  SaveRefreshTokenServiceInputDto,
} from '../../../core/i-services/i-save-refresh-token.service';
import { ICreateRefreshTokenRepository } from '../../../core/i-repositories/auth/i-create-refresh-token.repository';
import { CreateRefreshTokenRepository } from '../../../infra/persistence/repositories/auth/create-refresh-token.repository';

@Injectable()
export class SaveRefreshTokenService implements ISaveRefreshTokenService {
  constructor(
    @Inject(CreateRefreshTokenRepository)
    private readonly createRefreshTokenRepository: ICreateRefreshTokenRepository,
  ) {}

  async execute(dto: SaveRefreshTokenServiceInputDto): Promise<void> {
    await this.createRefreshTokenRepository.execute(dto);
  }
}
