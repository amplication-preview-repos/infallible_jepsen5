import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  host?: SortOrder;
  id?: SortOrder;
  isPrivate?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
