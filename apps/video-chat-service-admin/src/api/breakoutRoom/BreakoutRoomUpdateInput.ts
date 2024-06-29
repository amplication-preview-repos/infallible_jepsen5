import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BreakoutRoomUpdateInput = {
  name?: string | null;
  room?: RoomWhereUniqueInput | null;
};
