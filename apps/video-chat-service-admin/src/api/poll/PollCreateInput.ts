import { OptionCreateNestedManyWithoutPollsInput } from "./OptionCreateNestedManyWithoutPollsInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type PollCreateInput = {
  options?: OptionCreateNestedManyWithoutPollsInput;
  question?: string | null;
  room?: RoomWhereUniqueInput | null;
};
