import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";

export type OptionUpdateInput = {
  poll?: PollWhereUniqueInput | null;
  text?: string | null;
};
