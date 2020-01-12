import React from "react";
import { bindActionCreators } from "redux";
import { Form } from "react-final-form";
import { SigninInterface } from "./Interfaces/SignInInterface";
import { signInUser, signOutUser } from "../../../../store/auth/actionCreators";
import { connect } from "react-redux";
import { UserForm } from "@components/App/Auth/Signin/Interfaces/UserFormInterface";
import InputValidate from '../../../../HOC/AuthHOC/InputValidateHOC';
import { required, email, password, composeValidators } from '../validation';
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { InitialStateInterface } from "store/auth/initialStateInterface";

const SigninForm = styled.form`
  width: 550px;
  display: flex;
  flex-direction: column;
`;

const initialValues: UserForm = {
  email: "",
  password: ""
};

const SignIn = ({ uid, signOutUser, signInUser }: SigninInterface) => {

  const handleFormSubmit = (formObj: UserForm) => {
    signInUser(formObj.email, formObj.password);
  };

  const handleSignOut = (e: React.ChangeEvent<{}>) => {
    e.preventDefault();
    signOutUser();
  };

  return (
    <div>
<div>Current user: {uid}</div>
        <button onClick={handleSignOut}>Sign out</button>
        <Form
          onSubmit={formObj => {
            handleFormSubmit(formObj);
          }}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <SigninForm
              onSubmit={(e:React.ChangeEvent<{}>) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
             <InputValidate
              id="EmailSignin"
              label="Email"
              variant="outlined"
              validate={composeValidators(required, email)}
              type="email"
              fieldName="email"
            />
            <InputValidate
              id="PasswordSignin"
              label="Password"
              variant="outlined"
              validate={composeValidators(required, password)}
              type="password"
              fieldName="password"
            />
                <Button
                  className="submit"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
            </SigninForm>
          )}
        />
     </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ signInUser, signOutUser }, dispatch);
};

const mapStateToProps = (state: InitialStateInterface) => {
  return {
    token: state.authReducer.token,
    uid: state.authReducer.uid,
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
