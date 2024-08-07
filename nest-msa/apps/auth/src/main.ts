import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: true, credentials: true });

  app.listen(8001).then(() => {
    console.log(`Auth Service is listening on port 8001`);
  });

  process.on('SIGINT', () => {
    process.exit(0);
  });
}

bootstrap();
