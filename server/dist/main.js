"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    });
    const port = Number(process.env.PORT ?? 4000);
    await app.listen(port, "127.0.0.1");
    console.log(`AD Wala NestJS API listening on http://127.0.0.1:${port}`);
}
bootstrap();
