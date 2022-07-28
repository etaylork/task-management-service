import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';

console.log(process.env);

async function bootstrap() {
  // How to add common logger into applciation
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  // Whenever nestjs encounters a validation decorator, then the application will perform the validation
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  const port = 3000;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
