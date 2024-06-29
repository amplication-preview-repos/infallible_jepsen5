import { SortOrder } from "../../util/SortOrder";

export type OptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pollId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
