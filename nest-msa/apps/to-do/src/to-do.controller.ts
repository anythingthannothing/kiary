import { Controller, Get } from '@nestjs/common';
import { ToDoService } from './to-do.service';

@Controller()
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Get()
  getHello(): string {
    return this.toDoService.getHello();
  }
}
