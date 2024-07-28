import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CheckEmailService } from '../../user/services';
import { CheckEmailReqDto } from '../dto/check-email.req.dto';

@Controller()
export class CheckEmailController {
  constructor(
    @Inject(CheckEmailService)
    private readonly checkEmailService: CheckEmailService,
  ) {}

  @Post('auth/check-email')
  async execute(@Body() body: CheckEmailReqDto) {
    const result = await this.checkEmailService.execute(body.email);

    return { isEmailExists: result };
  }
}
