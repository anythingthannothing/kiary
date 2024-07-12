import { Module } from '@nestjs/common';
import { SignUpController } from '../controllers/auth/sign-up.controller';
import { AuthModule } from './auth.module';
import { SignUpService } from '../services/auth/sign-up.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
  controllers: [SignUpController],
  providers: [SignUpService],
})
export class AppModule {}
