import { BreakoutRoomListRelationFilter } from "../breakoutRoom/BreakoutRoomListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { PollListRelationFilter } from "../poll/PollListRelationFilter";

export type RoomWhereInput = {
  breakoutRooms?: BreakoutRoomListRelationFilter;
  host?: StringNullableFilter;
  id?: StringFilter;
  isPrivate?: BooleanNullableFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  polls?: PollListRelationFilter;
};
