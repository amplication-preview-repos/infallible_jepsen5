import { Option as TOption } from "../api/option/Option";

export const OPTION_TITLE_FIELD = "text";

export const OptionTitle = (record: TOption): string => {
  return record.text?.toString() || String(record.id);
};
