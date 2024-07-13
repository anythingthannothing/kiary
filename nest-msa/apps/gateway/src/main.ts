import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from '../../auth/src/application/modules';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
    },
  );

  return await app.listen();
}

const server = await (async () => {
  return await bootstrap();
})();

const gracefulShutdown = async () => {
  server.close(() => {
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);

process.on('SIGINT', gracefulShutdown);
