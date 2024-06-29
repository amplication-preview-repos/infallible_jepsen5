import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  room?: RoomWhereUniqueInput | null;
  sender?: string | null;
  timestamp?: Date | null;
};
