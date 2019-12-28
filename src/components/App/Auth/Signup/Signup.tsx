import React from 'react';
import { connect } from 'react-redux';
import { authSignup } from '../../../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { SignupInterface } from './SignupInterface';

const StyledInputGroup = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  
`;
const StyledInput = styled.div`
  margin: 12px 0px;
`;
const StyledSpan = styled.span`
  margin: 12px 0px;
  text-align: center;
  display: block;
  font-size: 18px;
  font-weight: 700;
`;

interface Props {
  authSignup: (userData: SignupInterface) => void,
}

const Signup: React.FC<Props> = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [name, setName] = React.useState('');
  const [group, setGroup] = React.useState('');

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    if (password !== confirm) { return; }
    const userData: SignupInterface = {
      email: email,
      password: password,
      name: name,
      group: group
    };
    props.authSignup(userData);
  }

  const inputEmailChange = (event: any) => {
    setEmail(event.target.value);
  }

  const inputPasswordChange = (event: any) => {
    setPassword(event.target.value);
  }
  
  const inputPasswordConfirmChange = (event: any) => {
    setConfirm(event.target.value);
  }

  const inputNameChange = (event: any) => {
    setName(event.target.value);
  }

  const inputGroupChange = (event: any) => {
    setGroup(event.target.value);
  }

  return(
    <div>
        <StyledSpan>Sign up</StyledSpan>
          <StyledInputGroup>
            <StyledInput>
              <TextField 
                id="EmailSignup" label="Email" variant="outlined" onChange={ inputEmailChange } type="email" value={ email } 
              />
            </StyledInput>
            <StyledInput>
              <TextField
                id="PasswordSignup" label="Password" variant="outlined" type="password" onChange={ inputPasswordChange } value={password}
                autoComplete="on" 
              />
            </StyledInput>
            <StyledInput>
              <TextField
                id="ConfirmPasswordSignup" label="Confirm password" variant="outlined" type="password"
                onChange={ inputPasswordConfirmChange } value={ confirm } autoComplete="on" 
              />
            </StyledInput>
            <StyledInput>
              <TextField
                id="NameSignup" label="Name" variant="outlined" onChange={ inputNameChange } type="text" value={ name } 
              />
            </StyledInput>
            <StyledInput>
              <TextField
                id="outlined-basic" label="GroupSignup" variant="outlined" onChange={ inputGroupChange } type="text" value={ group } 
              />
            </StyledInput>
            <Button onClick={ onSubmitForm } variant="contained" color="primary">SIGNUP</Button>
          </StyledInputGroup>
    </div>
  )
}

export default connect(null, { authSignup })(Signup);