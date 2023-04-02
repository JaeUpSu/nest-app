import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사
  app.useGlobalPipes(
    new ValidationPipe({
      // decorator 도 없는 어떠한 property의 object 거름 , validator 에 도달안함
      whitelist: true,
      // 잘못된 요소 표시
      forbidNonWhitelisted: true,
      // 원하는 실제 타입으로 변환시켜줌
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
