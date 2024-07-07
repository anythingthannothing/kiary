import { Injectable } from '@nestjs/common';

@Injectable()
export class ToDoService {
  getHello(): string {
    return 'Hello World!';
  }
}
