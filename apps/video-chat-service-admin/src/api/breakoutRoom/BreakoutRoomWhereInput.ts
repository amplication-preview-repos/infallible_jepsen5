import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BreakoutRoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
};
