import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Products" source="products" />
        <TextInput label="User " source="user" type="email" />
      </SimpleForm>
    </Edit>
  );
};
