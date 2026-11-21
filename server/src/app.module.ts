import { Module } from "@nestjs/common";
import { LeadsController } from "./leads.controller";
import { StorageService } from "./storage.service";

@Module({
  controllers: [LeadsController],
  providers: [StorageService],
})
export class AppModule {}
