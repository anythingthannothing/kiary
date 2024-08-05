import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasswordEntity } from '../../../entities';
import {
  CreatePasswordRepositoryInputDto,
  ICreatePasswordRepository,
} from '../../../../core/i-repositories/auth/i-create-password.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePasswordRepository implements ICreatePasswordRepository {
  constructor(
    @InjectRepository(PasswordEntity)
    private readonly passwordRepository: Repository<PasswordEntity>,
  ) {}

  async execute(
    dto: CreatePasswordRepositoryInputDto,
  ): Promise<PasswordEntity> {
    return await this.passwordRepository.save({
      accountId: dto.accountId,
      hashedPassword: dto.hashedPassword,
      updatedAt: new Date(),
    });
  }
}
