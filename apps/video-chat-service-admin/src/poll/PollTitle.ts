import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "question";

export const PollTitle = (record: TPoll): string => {
  return record.question?.toString() || String(record.id);
};
