import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../../entities';
import { ICreateUserRepository } from '../../../../core/i-repositories/user/i-create-user.repository';

export class CreateUserRepository implements ICreateUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(nickname: string): Promise<UserEntity> {
    const now = new Date();
    return this.userRepository.save({
      nickname,
      createdAt: now,
      updatedAt: now,
    });
  }
}
