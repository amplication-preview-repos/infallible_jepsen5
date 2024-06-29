import { Option } from "../option/Option";
import { Room } from "../room/Room";

export type Poll = {
  createdAt: Date;
  id: string;
  options?: Array<Option>;
  question: string | null;
  room?: Room | null;
  updatedAt: Date;
};
