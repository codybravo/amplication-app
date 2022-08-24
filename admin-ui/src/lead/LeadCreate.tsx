import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Products" source="products" />
        <TextInput label="User " source="user" type="email" />
      </SimpleForm>
    </Create>
  );
};
