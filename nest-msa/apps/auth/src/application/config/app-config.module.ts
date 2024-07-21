import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthDbConfigService } from './auth-db-config.service';
import { envValidationSchema } from './env-validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      cache: true,
      validationSchema: envValidationSchema,
      validationOptions: {
        abortEarly: false,
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useClass: AuthDbConfigService,
      inject: [AuthDbConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class AppConfigModule {}
