import React from 'react';
import { Field } from 'react-final-form';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  handleChange: (e: any) => void;
  value: string;
  fieldName: string;
  id: string;
  label: string;
  variant: string;
  type: string;
}

const Input = styled.div`
  margin: 12px 0px;
`;

const SignupInput: React.FC<Props> = ({ handleChange, value, fieldName, id, label, variant, type }) => (
  <Input>
    <Field name={ fieldName }>
      {({ input }) => (
        <TextField 
          variant="outlined"
          onChange={ handleChange } 
          value={ value }
          id={id}
          label={label}
          type={type}
          {...input}
        />
      )}
    </Field>
  </Input>
);

export default SignupInput;