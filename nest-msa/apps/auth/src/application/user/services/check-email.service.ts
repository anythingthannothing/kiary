import { Inject, Injectable } from '@nestjs/common';
import { ICheckEmailService } from '../../../core/i-services/i-check-email.service';
import { ICheckEmailRepository } from '../../../core/i-repositories/auth';
import { CheckEmailRepository } from '../../../infra/persistence/repositories/auth/check-email.repository';

@Injectable()
export class CheckEmailService implements ICheckEmailService {
  constructor(
    @Inject(CheckEmailRepository)
    private readonly checkEmailRepository: ICheckEmailRepository,
  ) {}

  async execute(email: string): Promise<boolean> {
    return this.checkEmailRepository.execute(email);
  }
}
