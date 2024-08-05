import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { AccountEntity, UserEntity } from '../../infra/entities';
import { PasswordEntity } from '../../infra/entities/password.entity';
import { ImageEntity } from '../../infra/entities/image.entity';
import { RefreshTokenEntity } from '../../infra/entities/refresh-token.entity';
import { ProviderEntity } from '../../infra/entities/provider.entity';

@Injectable()
export class AuthDbConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('PG_DB_HOST'),
      port: +this.configService.get<string>('PG_DB_PORT'),
      username: this.configService.get<string>('PG_DB_USERNAME'),
      password: this.configService.get<string>('PG_DB_PASSWORD'),
      database: this.configService.get<string>('PG_DB_DATABASE'),
      // schema: 'auth',
      synchronize: this.configService.get<string>('NODE_ENV') === 'test',
      logging: this.configService.get<string>('NODE_ENV') === 'development',
      poolSize:
        this.configService.get<string>('NODE_ENV') === 'production' ? 4 : 1,
      entities: [
        AccountEntity,
        ImageEntity,
        PasswordEntity,
        RefreshTokenEntity,
        UserEntity,
        ProviderEntity,
      ],
      parseInt8: false,
    };
  }
}
