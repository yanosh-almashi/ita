import React from 'react';
import { connect } from 'react-redux';
import { authSignup } from '../../../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { SignupInterface } from './SignupInterface';
import { Form } from 'react-final-form';
import SignupInput from '../../../../HOC/AuthHOC/SignupInputHOC';
import { emailValidation } from '../FormValidation';

const SignupForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

interface Props {
  authSignup: (userData: SignupInterface) => void,
}

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  group: '',
}

const Signup: React.FC<Props> = (props) => {
  const required = (value: string) => (value ? undefined : 'Required');
  const email = (value: string) => (emailValidation(value) ? undefined : 'Invalid email!');
  const password = (value: string) => ( (value.length < 6) ? 'Min 6 symbols!' : undefined );
  const composeValidators = (...validators: any) => (value: any) =>
    validators.reduce((error: any, validator: any) => error || validator(value), undefined);

  
  const onSubmitForm = (form: any) => {
    const userData: SignupInterface = {
      email: form.email,
      password: form.password,
      name: form.name,
      group: form.group
    };
    props.authSignup(userData);
  }


  return(
    <div>
      <Form 
        onSubmit={(formObj) => { onSubmitForm(formObj) }}
        initialValues={initialValues}
        validate={values => {
          const errors: any = {};
          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords must match!';
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <SignupForm onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            <SignupInput
              id="EmailSignup"
              label="Email"
              variant="outlined"
              validate={composeValidators(required, email)}
              type="email"
              fieldName="email"
            />
            <SignupInput
              id="PasswordSignup"
              label="Password"
              variant="outlined"
              validate={composeValidators(required, password)}
              type="password"
              fieldName="password"
            />
            <SignupInput
              id="ConfirmPasswordSignup"
              label="Confirm password"
              variant="outlined"
              validate={composeValidators(required)}
              type="password"
              fieldName="confirmPassword"
            />
            <SignupInput
              id="NameSignup"
              label="Name"
              variant="outlined"
              validate={composeValidators(required)}
              type="text"
              fieldName="name"
            />
            <SignupInput
              id="GroupSignup"
              label="GroupSignup"
              variant="outlined"
              validate={composeValidators(required)}
              type="text"
              fieldName="group"
            />
            <Button variant="contained" color="primary" type="submit" >SIGNUP</Button>
          </SignupForm>
        )}
      />
      
    </div>
  );
}

export default connect(
  null, 
  { authSignup }
)(Signup);