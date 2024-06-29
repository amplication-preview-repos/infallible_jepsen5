import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type PollWhereInput = {
  id?: StringFilter;
  options?: OptionListRelationFilter;
  question?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
};
