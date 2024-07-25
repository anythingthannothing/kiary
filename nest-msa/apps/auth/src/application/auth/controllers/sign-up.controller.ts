import { Controller, Inject, Post } from '@nestjs/common';
import { SignUpService } from '../services/sign-up.service';
import { ISignUpService } from '../../../core/i-services/i-sign-up.service';
import { AuthMapper } from '../auth-mapper';
import { SignUpRequestDto } from '../dto/sign-up-request.dto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { SignUpResponseDto } from '../dto/sign-up-response.dto';

@Controller()
export class SignUpController {
  constructor(
    @Inject(SignUpService) private readonly signService: ISignUpService,
  ) {}

  @Post('sign-up')
  async execute(
    data: SignUpRequestDto,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<SignUpResponseDto> {
    const user = await this.signService.execute(
      AuthMapper.mapToSignUpServiceInputDto(data),
    );

    return AuthMapper.mapToSignUpResponseDto(user);
  }
}
