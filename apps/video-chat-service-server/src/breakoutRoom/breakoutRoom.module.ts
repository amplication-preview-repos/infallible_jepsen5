import { Module } from "@nestjs/common";
import { BreakoutRoomModuleBase } from "./base/breakoutRoom.module.base";
import { BreakoutRoomService } from "./breakoutRoom.service";
import { BreakoutRoomController } from "./breakoutRoom.controller";
import { BreakoutRoomResolver } from "./breakoutRoom.resolver";

@Module({
  imports: [BreakoutRoomModuleBase],
  controllers: [BreakoutRoomController],
  providers: [BreakoutRoomService, BreakoutRoomResolver],
  exports: [BreakoutRoomService],
})
export class BreakoutRoomModule {}
