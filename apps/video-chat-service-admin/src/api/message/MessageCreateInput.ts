import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  room?: RoomWhereUniqueInput | null;
  sender?: string | null;
  timestamp?: Date | null;
};
