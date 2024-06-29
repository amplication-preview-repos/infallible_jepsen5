import { BreakoutRoom } from "../breakoutRoom/BreakoutRoom";
import { Message } from "../message/Message";
import { Poll } from "../poll/Poll";

export type Room = {
  breakoutRooms?: Array<BreakoutRoom>;
  createdAt: Date;
  host: string | null;
  id: string;
  isPrivate: boolean | null;
  messages?: Array<Message>;
  name: string | null;
  polls?: Array<Poll>;
  updatedAt: Date;
};
