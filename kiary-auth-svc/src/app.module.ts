import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity, AccountEntity } from './core/entities';
import { PasswordEntity } from './core/entities/password.entity';
import { SignUpController } from './api/controllers/auth/sign-up.controller';
import { AuthModule } from './api/auth/auth.module';
import { SignUpService } from './core/services/auth/sign-up.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      cache: true,
      validationOptions: {
        abortEarly: false,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_DB_HOST,
      port: +(process.env.PG_DB_PORT || 5432),
      username: process.env.PG_DB_USERNAME,
      password: process.env.PG_DB_PASSWORD,
      schema: process.env.PG_DB_SCHEMA,
      entities: [UserEntity, AccountEntity, PasswordEntity],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
  ],
  controllers: [AppController, SignUpController],
  providers: [AppService, SignUpService],
})
export class AppModule {}
