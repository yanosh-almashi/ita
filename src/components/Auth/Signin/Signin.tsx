import React from 'react';
import { bindActionCreators } from 'redux';
import { Form } from 'react-final-form';
import { SigninInterface } from './Interfaces/SignInInterface';
import { signInUser, signOutUser } from '../../../store/auth/auth.actions';
import { connect } from 'react-redux';
import { UserForm } from '@components/Auth/Signin/Interfaces/UserFormInterface';
import InputValidate from '../../../HOC/input-validation/input-validation.hoc';
import { required, email, password, composeValidators } from '../../../utils/validation.utils';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { InitialStateInterface } from 'store/store-interfaces/initial-state.Interface';

const SigninForm = styled.form`
  width: 480px;
  display: flex;
  flex-direction: column;
`;

const initialValues: UserForm = {
  email: '',
  password: ''
};

const SignIn = ({ error, signInUser }: SigninInterface) => {
  const handleFormSubmit = (formObj: UserForm) => {
    signInUser(formObj.email, formObj.password);
  };

  return (
    <Form
      onSubmit={formObj => {
        handleFormSubmit(formObj);
      }}
      validate={() => {
        const errors: any = {};
        if (error) {
          errors.password = 'Invalid email or password';
        }
        return errors;
      }}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <SigninForm
          onSubmit={(e: React.ChangeEvent<{}>) => {
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
            SignIn
          </Button>
        </SigninForm>
      )}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ signInUser, signOutUser }, dispatch);
};

const mapStateToProps = (state: InitialStateInterface) => {
  return {
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
