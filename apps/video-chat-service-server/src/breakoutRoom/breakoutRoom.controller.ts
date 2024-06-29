import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BreakoutRoomService } from "./breakoutRoom.service";
import { BreakoutRoomControllerBase } from "./base/breakoutRoom.controller.base";

@swagger.ApiTags("breakoutRooms")
@common.Controller("breakoutRooms")
export class BreakoutRoomController extends BreakoutRoomControllerBase {
  constructor(protected readonly service: BreakoutRoomService) {
    super(service);
  }
}
