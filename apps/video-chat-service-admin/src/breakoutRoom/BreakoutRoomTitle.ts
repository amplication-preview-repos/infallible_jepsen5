import { BreakoutRoom as TBreakoutRoom } from "../api/breakoutRoom/BreakoutRoom";

export const BREAKOUTROOM_TITLE_FIELD = "name";

export const BreakoutRoomTitle = (record: TBreakoutRoom): string => {
  return record.name?.toString() || String(record.id);
};
