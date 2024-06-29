import { Module } from "@nestjs/common";
import { PollModuleBase } from "./base/poll.module.base";
import { PollService } from "./poll.service";
import { PollController } from "./poll.controller";
import { PollResolver } from "./poll.resolver";

@Module({
  imports: [PollModuleBase],
  controllers: [PollController],
  providers: [PollService, PollResolver],
  exports: [PollService],
})
export class PollModule {}
