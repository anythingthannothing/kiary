import { UserEntity } from '../../infra/entities';
import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { SignUpRequestDto } from './dto/sign-up-request.dto';
import { SignupServiceInputDto } from '../../core/i-services/i-sign-up.service';
import { UserDomain } from '../../core/domain';

export class AuthMapper {
  public static mapToSignUpServiceInputDto(
    dto: SignUpRequestDto,
  ): SignupServiceInputDto {
    return { email: dto.email, password: dto.password, nickname: dto.nickname };
  }

  public static mapToSignUpResponseDto(user: UserDomain): SignUpResponseDto {
    return {
      userId: user.userId,
    };
  }
}
