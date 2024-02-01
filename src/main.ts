// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create an instance of Express
  const expressApp = express();

    // Log incoming requests
    expressApp.use((req, res, next) => {
      console.log(`Incoming Request - Method: ${req.method}, Path: ${req.path}`);
      next();
    });

  // Set up Nest application middleware
  app.init();

  // Attach Nest application to the Express instance
  expressApp.use((req, res, next) => app.getHttpAdapter().getInstance()(req, res, next));

  // Start the Express server
  await app.listen(3000);
}
bootstrap();
