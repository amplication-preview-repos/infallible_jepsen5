import { SortOrder } from "../../util/SortOrder";

export type PollOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
};
