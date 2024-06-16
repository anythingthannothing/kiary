import { Body, Controller, Inject, Post } from '@nestjs/common';
import { SignUpService } from '../../../core/services/auth/sign-up.service';
import { ISignUpService } from '../../../core/i-services/i-sign-up.service';
import { SignUpRequestDto } from '../../dtos/sign-up-request.dto';
import { SignUpResponseDto } from '../../dtos/sign-up-response.dto';
import { AuthMapper } from '../../mappers/auth-mapper';

@Controller('sign-up')
export class SignUpController {
  constructor(
    @Inject(SignUpService) private readonly signService: ISignUpService,
  ) {}

  @Post()
  async execute(@Body() dto: SignUpRequestDto): Promise<SignUpResponseDto> {
    const user = await this.signService.execute(
      AuthMapper.mapToSignUpServiceInputDto(dto),
    );

    return AuthMapper.mapToSignUpResponseDto(user);
  }
}
