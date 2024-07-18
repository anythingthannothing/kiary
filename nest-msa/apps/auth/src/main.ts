import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './application/modules';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 80,
      },
    },
  );

  app.listen().then(() => {
    console.log(`Auth Service is listening on port 80`);
  });
}

bootstrap();
