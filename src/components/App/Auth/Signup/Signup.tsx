import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { authSignup } from '../../../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { SignupInterface, SignupFormInterface } from './SignupInterface';
import { Form } from 'react-final-form';
import SignupInput from './SignupInputs/SignupEmail';

const SignupForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

interface Props {
  authSignup: (userData: SignupInterface) => void,
}

const formInitial: SignupFormInterface = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  group: '',
};

function reducer(state: SignupFormInterface, action: any) {
  switch (action.type) {
    case 'email': 
      return { ...state, email: action.payload };
    case 'password': 
      return { ...state, password: action.payload };
    case 'confirmPassword': 
      return { ...state, confirmPassword: action.payload };
    case 'name': 
      return { ...state, name: action.payload };
    case 'group': 
      return { ...state, group: action.payload };
    default: 
      return state;
  }
}


const Signup: React.FC<Props> = (props) => {
  const [formState, dispatch] = useReducer(reducer, formInitial);
  
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
      <Form onSubmit={(formObj) => { onSubmitForm(formObj) }}>
        {({handleSubmit}) => (
          <SignupForm onSubmit={handleSubmit}>
            <SignupInput
              id="EmailSignup"
              label="Email"
              variant="outlined"
              type="email"
              fieldName="email"
              handleChange={ (e) => dispatch({type: 'email', payload: e.target.value} ) } 
              value={ formState.email }
            />
            <SignupInput
              id="PasswordSignup"
              label="Password"
              variant="outlined"
              type="password"
              fieldName="password"
              handleChange={ (e) => dispatch({type: 'password', payload: e.target.value}) } 
              value={ formState.password }
            />
            <SignupInput
              id="ConfirmPasswordSignup"
              label="Confirm password"
              variant="outlined"
              type="password"
              fieldName="confirmPassword"
              handleChange={ (e) => dispatch({type: 'confirmPassword', payload: e.target.value}) } 
              value={ formState.confirmPassword }
            />
            <SignupInput
              id="NameSignup"
              label="Name"
              variant="outlined"
              type="text"
              fieldName="name"
              handleChange={ (e) => dispatch({type: 'name', payload: e.target.value}) } 
              value={ formState.name }
            />
            <SignupInput
              id="GroupSignup"
              label="GroupSignup"
              variant="outlined"
              type="text"
              fieldName="group"
              handleChange={ (e) => dispatch({type: 'group', payload: e.target.value}) } 
              value={ formState.group } 
            />  
            <Button variant="contained" color="primary" type="submit" >SIGNUP</Button>
          </SignupForm>
        )}
      </Form>
    </div>
  );
}

export default connect(
  null, 
  { authSignup }
)(Signup);