import { BreakoutRoomWhereInput } from "./BreakoutRoomWhereInput";
import { BreakoutRoomOrderByInput } from "./BreakoutRoomOrderByInput";

export type BreakoutRoomFindManyArgs = {
  where?: BreakoutRoomWhereInput;
  orderBy?: Array<BreakoutRoomOrderByInput>;
  skip?: number;
  take?: number;
};
