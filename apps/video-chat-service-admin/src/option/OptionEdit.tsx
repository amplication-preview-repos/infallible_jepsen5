import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PollTitle } from "../poll/PollTitle";

export const OptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="poll.id" reference="Poll" label="poll">
          <SelectInput optionText={PollTitle} />
        </ReferenceInput>
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
