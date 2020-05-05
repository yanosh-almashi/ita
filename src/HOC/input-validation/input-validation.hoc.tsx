import React from "react";
import { Field } from "react-final-form";
import { TextField } from "@material-ui/core";
import { Input, InputError } from "./input-validation.styled";

interface Props {
  fieldName: string;
  id: string;
  label: string;
  variant: string;
  type: string;
  validate?: any;
}

const InputValidate: React.FC<Props> = ({
  fieldName,
  id,
  label,
  validate,
  type
}) => (
  <Input>
    <Field name={fieldName} validate={validate}>
      {({ input, meta }) => (
        <div>
          <TextField
            variant="outlined"
            id={id}
            label={label}
            type={type}
            {...input}
          />
          {meta.error && meta.touched && <InputError>{meta.error}</InputError>}
        </div>
      )}
    </Field>
  </Input>
);

export default InputValidate;
