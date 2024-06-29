import { BreakoutRoomCreateNestedManyWithoutRoomsInput } from "./BreakoutRoomCreateNestedManyWithoutRoomsInput";
import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";
import { PollCreateNestedManyWithoutRoomsInput } from "./PollCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  breakoutRooms?: BreakoutRoomCreateNestedManyWithoutRoomsInput;
  host?: string | null;
  isPrivate?: boolean | null;
  messages?: MessageCreateNestedManyWithoutRoomsInput;
  name?: string | null;
  polls?: PollCreateNestedManyWithoutRoomsInput;
};
