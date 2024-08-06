import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { SignUpRequestDto } from './dto/sign-up-request.dto';
import { SignupServiceInputDto } from '../../core/i-services/i-sign-up.service';

export class AuthMapper {
  public static mapToSignUpServiceInputDto(
    dto: SignUpRequestDto,
  ): SignupServiceInputDto {
    return { email: dto.email, password: dto.password, nickname: dto.nickname };
  }

  public static mapToSignUpResponseDto(dto: {
    tokenExpiresIn: number;
    nickname: string;
  }): SignUpResponseDto {
    return {
      tokenExpiresAt: new Date(Date.now() + dto.tokenExpiresIn * 1000),
      nickname: dto.nickname,
      profileUrl: null,
    };
  }
}
