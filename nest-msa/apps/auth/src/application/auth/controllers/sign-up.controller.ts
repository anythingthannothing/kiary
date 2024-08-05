import { Body, Controller, Inject, Post } from '@nestjs/common';
import { SignUpService } from '../services/sign-up.service';
import { ISignUpService } from '../../../core/i-services/i-sign-up.service';
import { AuthMapper } from '../auth-mapper';
import { SignUpRequestDto } from '../dto/sign-up-request.dto';
import { SignUpResponseDto } from '../dto/sign-up-response.dto';

@Controller()
export class SignUpController {
  constructor(
    @Inject(SignUpService) private readonly signService: ISignUpService,
  ) {}

  @Post('auth')
  async execute(@Body() body: SignUpRequestDto): Promise<SignUpResponseDto> {
    const user = await this.signService.execute(
      AuthMapper.mapToSignUpServiceInputDto(body),
    );

    return AuthMapper.mapToSignUpResponseDto(user);
  }
}
