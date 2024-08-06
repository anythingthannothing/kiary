import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { SignUpService } from '../services/sign-up.service';
import { ISignUpService } from '../../../core/i-services/i-sign-up.service';
import { AuthMapper } from '../auth-mapper';
import { SignUpRequestDto } from '../dto/sign-up-request.dto';
import { SignUpResponseDto } from '../dto/sign-up-response.dto';
import { JwtTokenService } from '@app/nest-msa-library/jwt-token.service';
import { ITokenService } from '@app/nest-msa-library/i-token-service';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { ISaveRefreshTokenService } from '../../../core/i-services/i-save-refresh-token.service';
import { SaveRefreshTokenService } from '../services/save-refresh-token.service';

@Controller()
export class SignUpController {
  constructor(
    private readonly configService: ConfigService,
    @Inject(SignUpService) private readonly signHandler: ISignUpService,
    @Inject(JwtTokenService) private readonly jwtTokenHandler: ITokenService,
    @Inject(SaveRefreshTokenService)
    private readonly saveRefreshTokenHandler: ISaveRefreshTokenService,
  ) {}

  @Post('auth')
  async execute(
    @Body() body: SignUpRequestDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<SignUpResponseDto> {
    const user = await this.signHandler.execute(
      AuthMapper.mapToSignUpServiceInputDto(body),
    );

    const secondsToExpire = +this.configService.get<string>('JWT_EXPIRES_IN');

    const accessToken = await this.jwtTokenHandler.sign({
      payload: { userId: user.userId },
      secret: this.configService.get<string>('JWT_SECRET'),
      options: {
        expiresIn: secondsToExpire,
      },
    });

    response.cookie('Authorization', accessToken, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
    });

    const refreshToken = await this.jwtTokenHandler.generateRefreshToken(12);

    response.cookie('Refresh-Token', refreshToken, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
    });

    await this.saveRefreshTokenHandler.execute({
      refreshToken,
      userId: user.userId,
    });

    return AuthMapper.mapToSignUpResponseDto({
      tokenExpiresIn: secondsToExpire,
      nickname: user.nickname,
    });
  }
}
