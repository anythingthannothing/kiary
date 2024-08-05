import { Injectable } from '@nestjs/common';
import { IEncryptService } from '../../../core/i-services/i-encrypt-service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService implements IEncryptService {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
