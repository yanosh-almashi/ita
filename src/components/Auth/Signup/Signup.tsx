import React, { useState } from "react";
import { connect } from "react-redux";
import { authSignup } from "../../../store/auth/auth.actions";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { SignupInterface } from "./SignupInterface";
import { Form } from "react-final-form";
import InputValidate from "../../../HOC/input-validation/input-validation.hoc";
import {
  required,
  email,
  password,
  composeValidators
} from "../../../utils/validation.utils";
import FileUpload from "../../file-upload/file-upload";

const SignupForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

interface Props {
  authSignup: (userData: SignupInterface) => void;
}

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  group: ""
};

const Signup: React.FC<Props> = props => {
  const [avatar, setAvatar] = useState();

  const { authSignup } = props;

  const onSubmitForm = (form: any) => {
    const userData: SignupInterface = {
      email: form.email,
      password: form.password,
      name: form.name,
      group: form.group,
      file: avatar
    };
    authSignup(userData);
  };

  const handleFile = (file: File) => {
    //@ts-ignore
    setAvatar(file);
  };

  return (
    <div>
      <FileUpload putFile={handleFile} />
      <Form
        onSubmit={formObj => {
          onSubmitForm(formObj);
        }}
        initialValues={initialValues}
        validate={values => {
          const errors: any = {};
          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords must match!";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <SignupForm
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputValidate
              id="EmailSignup"
              label="Email"
              variant="outlined"
              validate={composeValidators(required, email)}
              type="email"
              fieldName="email"
            />
            <InputValidate
              id="PasswordSignup"
              label="Password"
              variant="outlined"
              validate={composeValidators(required, password)}
              type="password"
              fieldName="password"
            />
            <InputValidate
              id="ConfirmPasswordSignup"
              label="Confirm password"
              variant="outlined"
              validate={composeValidators(required)}
              type="password"
              fieldName="confirmPassword"
            />
            <InputValidate
              id="NameSignup"
              label="Name"
              variant="outlined"
              validate={composeValidators(required)}
              type="text"
              fieldName="name"
            />
            <InputValidate
              id="GroupSignup"
              label="Group"
              variant="outlined"
              validate={composeValidators(required)}
              type="text"
              fieldName="group"
            />
            <Button variant="contained" color="primary" type="submit">
              SIGNUP
            </Button>
          </SignupForm>
        )}
      />
    </div>
  );
};

export default connect(null, { authSignup })(Signup);
