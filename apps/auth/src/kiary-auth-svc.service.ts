import { Injectable } from '@nestjs/common';

@Injectable()
export class KiaryAuthSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}
