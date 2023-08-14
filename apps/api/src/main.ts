/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { validateSync } from 'class-validator';
import { RequestA, RequestArgs } from './app/validate';
import { plainToClass } from 'class-transformer';

async function bootstrap() {
  await NestFactory.create(AppModule);
}

console.log(
  JSON.stringify(
    validateSync(
      plainToClass(RequestArgs, {
        where: {
          id: {
            equals: '1',
          },
        },
      }),
      {
        enableDebugMessages: true,
        whitelist: true,
        forbidUnknownValues: true,
        forbidNonWhitelisted: true,
      }
    ),
    null,
    2
  )
);
