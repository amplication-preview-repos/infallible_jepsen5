import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PollTitle } from "../poll/PollTitle";

export const OptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="poll.id" reference="Poll" label="poll">
          <SelectInput optionText={PollTitle} />
        </ReferenceInput>
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
