import { BreakoutRoomUpdateManyWithoutRoomsInput } from "./BreakoutRoomUpdateManyWithoutRoomsInput";
import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";
import { PollUpdateManyWithoutRoomsInput } from "./PollUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  breakoutRooms?: BreakoutRoomUpdateManyWithoutRoomsInput;
  host?: string | null;
  isPrivate?: boolean | null;
  messages?: MessageUpdateManyWithoutRoomsInput;
  name?: string | null;
  polls?: PollUpdateManyWithoutRoomsInput;
};
