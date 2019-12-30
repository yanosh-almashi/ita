import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { authSignup } from '../../../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { SignupInterface, SignupFormInterface } from './SignupInterface';

const InputGroupWrapper = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  
`;
const Input = styled.div`
  margin: 12px 0px;
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

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    if (formState.password !== formState.confirmPassword) { return; }
    const userData: SignupInterface = {
      email: formState.email,
      password: formState.password,
      name: formState.name,
      group: formState.group
    };
    props.authSignup(userData);
  }

  return(
    <div>
      <InputGroupWrapper>
        <Input>
            <TextField 
              id="EmailSignup" label="Email" variant="outlined" type="email"
              onChange={ 
                (e) => dispatch({type: 'email', payload: e.target.value}) 
              } value={ formState.email } 
            />
          </Input>
        <Input>
            <TextField
              id="PasswordSignup" label="Password" variant="outlined" type="password"
              onChange={  
                (e) => dispatch({type: 'password', payload: e.target.value})
              } value={ formState.password } autoComplete="on" 
            />
          </Input>
        <Input>
            <TextField
              id="ConfirmPasswordSignup" label="Confirm password" variant="outlined" type="password"
              onChange={ 
                (e) => dispatch({type: 'confirmPassword', payload: e.target.value})
              } value={ formState.confirmPassword } autoComplete="on" 
            />
          </Input>
        <Input>
            <TextField
              id="NameSignup" label="Name" variant="outlined" onChange={
                (e) => dispatch({type: 'name', payload: e.target.value})
              } type="text" value={ formState.name } 
            />
          </Input>
        <Input>
            <TextField
              id="outlined-basic" label="GroupSignup" variant="outlined" type="text"
              onChange={ 
                (e) => dispatch({type: 'group', payload: e.target.value})
              } value={ formState.group } 
            />
          </Input>
        <Button onClick={ onSubmitForm } variant="contained" color="primary">SIGNUP</Button>
      </InputGroupWrapper>
    </div>
  );
}

export default connect(null, { authSignup })(Signup);