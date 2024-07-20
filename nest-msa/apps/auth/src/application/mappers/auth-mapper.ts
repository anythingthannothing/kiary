import { UserEntity } from '../../infra/entities';
import { SignUpResponseDto } from '../dtos/sign-up-response.dto';
import { SignUpRequestDto } from '../dtos/sign-up-request.dto';
import { SignupServiceInputDto } from '../../core/i-services/i-sign-up.service';

export class AuthMapper {
  public static mapToSignUpServiceInputDto(
    dto: SignUpRequestDto,
  ): SignupServiceInputDto {
    return { email: dto.email, password: dto.password };
  }

  public static mapToSignUpResponseDto(user: UserEntity): SignUpResponseDto {
    return {
      userId: user.userId,
      email: user.email,
    };
  }
}
