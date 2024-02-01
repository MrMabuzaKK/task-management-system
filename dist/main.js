"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const expressApp = express();
    expressApp.use((req, res, next) => {
        console.log(`Incoming Request - Method: ${req.method}, Path: ${req.path}`);
        next();
    });
    app.init();
    expressApp.use((req, res, next) => app.getHttpAdapter().getInstance()(req, res, next));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map