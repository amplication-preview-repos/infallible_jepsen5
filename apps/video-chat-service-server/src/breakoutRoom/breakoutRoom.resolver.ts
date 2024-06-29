import * as graphql from "@nestjs/graphql";
import { BreakoutRoomResolverBase } from "./base/breakoutRoom.resolver.base";
import { BreakoutRoom } from "./base/BreakoutRoom";
import { BreakoutRoomService } from "./breakoutRoom.service";

@graphql.Resolver(() => BreakoutRoom)
export class BreakoutRoomResolver extends BreakoutRoomResolverBase {
  constructor(protected readonly service: BreakoutRoomService) {
    super(service);
  }
}
