import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshTokenEntity } from '../../../entities';
import { ICreateRefreshTokenRepository } from '../../../../core/i-repositories/auth/i-create-refresh-token.repository';
import { SaveRefreshTokenServiceInputDto } from '../../../../core/i-services/i-save-refresh-token.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRefreshTokenRepository
  implements ICreateRefreshTokenRepository
{
  constructor(
    @InjectRepository(RefreshTokenEntity)
    private readonly refreshTokenRepository: Repository<RefreshTokenEntity>,
  ) {}

  async execute(dto: SaveRefreshTokenServiceInputDto): Promise<void> {
    await this.refreshTokenRepository.save({
      userId: dto.userId,
      token: dto.refreshToken,
      isValid: 1,
      expiresAt: new Date(Date.now() + 3600 * 24 * 1000 * 14),
    });
  }
}
