import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { JwtTokenService } from '@app/nest-msa-library/jwt-token.service';
import { ITokenService } from '@app/nest-msa-library/i-token-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(JwtTokenService) private jwtService: ITokenService,
    private configService: ConfigService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();

    const token = request.cookies['Authorization'];

    const verifyUrl = '/verify';

    if (!token && request.url === verifyUrl) {
      return true;
    }

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      request['user'] = await this.jwtService.verify({
        token,
        secret: this.configService.get<string>('JWT_SECRET'),
      });
    } catch {
      request.res.clearCookie('Authorization');
      throw new UnauthorizedException();
    }
    return true;
  }
}
