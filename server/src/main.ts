import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });
  const port = Number(process.env.PORT ?? 4000);
  await app.listen(port, "127.0.0.1");
  console.log(`AD Wala NestJS API listening on http://127.0.0.1:${port}`);
}

bootstrap();
