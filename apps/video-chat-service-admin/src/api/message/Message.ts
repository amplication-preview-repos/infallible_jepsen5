import { Room } from "../room/Room";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  room?: Room | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
