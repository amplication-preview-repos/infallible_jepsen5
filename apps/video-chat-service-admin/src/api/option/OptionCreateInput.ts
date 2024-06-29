import { PollWhereUniqueInput } from "../poll/PollWhereUniqueInput";

export type OptionCreateInput = {
  poll?: PollWhereUniqueInput | null;
  text?: string | null;
};
