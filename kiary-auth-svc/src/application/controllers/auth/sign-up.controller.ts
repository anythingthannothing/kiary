import { Controller, Inject } from '@nestjs/common';
import { SignUpService } from '../../../core/services/auth/sign-up.service';
import { ISignUpService } from '../../../core/i-services/i-sign-up.service';
import { AuthMapper } from '../../mappers/auth-mapper';
import { GrpcMethod } from '@nestjs/microservices';
import { SignUpRequestDto } from '../../dtos/sign-up-request.dto';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { SignUpResponseDto } from '../../dtos/sign-up-response.dto';

@Controller()
export class SignUpController {
  constructor(
    @Inject(SignUpService) private readonly signService: ISignUpService,
  ) {}

  @GrpcMethod('AuthService', 'SignUp')
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
