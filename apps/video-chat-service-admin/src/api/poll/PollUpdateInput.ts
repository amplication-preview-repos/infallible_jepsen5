import { OptionUpdateManyWithoutPollsInput } from "./OptionUpdateManyWithoutPollsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type PollUpdateInput = {
  options?: OptionUpdateManyWithoutPollsInput;
  question?: string | null;
  room?: RoomWhereUniqueInput | null;
};
