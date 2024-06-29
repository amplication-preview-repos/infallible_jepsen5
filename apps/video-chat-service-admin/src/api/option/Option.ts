import { Poll } from "../poll/Poll";

export type Option = {
  createdAt: Date;
  id: string;
  poll?: Poll | null;
  text: string | null;
  updatedAt: Date;
};
