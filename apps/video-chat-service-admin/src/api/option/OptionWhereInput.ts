import { StringFilter } from "../../util/StringFilter";
import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OptionWhereInput = {
  id?: StringFilter;
  poll?: PollWhereUniqueInput;
  text?: StringNullableFilter;
};
