import { Injectable } from '@nestjs/common';
import { generateRandomString } from '@app/nest-msa-library/utils/generate-random-string';
import { ITokenService } from '@app/nest-msa-library/i-token-service';
import * as jwt from 'jsonwebtoken';
import { promisify } from '@app/nest-msa-library/utils/promisify';

@Injectable()
export class JwtTokenService implements ITokenService {
  async sign(params: { payload: any; secret: string; options: any }) {
    return promisify(() =>
      jwt.sign(params.payload, params.secret, {
        algorithm: 'HS256',
        ...params.options,
      }),
    );
  }

  async verify(params: { token: string; secret: string }) {
    try {
      return promisify<string | jwt.JwtPayload>(() =>
        jwt.verify(params.token, params.secret),
      );
    } catch (error) {}
  }

  async generateRefreshToken(length: number): Promise<string> {
    return await generateRandomString(length);
  }
}
