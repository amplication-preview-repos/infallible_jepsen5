import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BreakoutRoomServiceBase } from "./base/breakoutRoom.service.base";

@Injectable()
export class BreakoutRoomService extends BreakoutRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
