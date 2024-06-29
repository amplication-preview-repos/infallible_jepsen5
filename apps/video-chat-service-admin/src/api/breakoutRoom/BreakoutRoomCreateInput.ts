import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BreakoutRoomCreateInput = {
  name?: string | null;
  room?: RoomWhereUniqueInput | null;
};
