import { Room } from "../room/Room";

export type BreakoutRoom = {
  createdAt: Date;
  id: string;
  name: string | null;
  room?: Room | null;
  updatedAt: Date;
};
