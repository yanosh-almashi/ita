import React, { FC, useEffect, useReducer, useState } from "react";
import { bindActionCreators } from "redux";
import { Form, Field } from "react-final-form";
import { SigninInterface } from "./SignInInterface";
import { InitialStateInterface } from "../../../../store/auth/initialStateInterface";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Tabs,
  Tab,
  TextField
} from "@material-ui/core";
import styled from "styled-components";
import {
  login,
  signOutUser,
  verifyAuth
} from "../../../../store/auth/actionCreators";
import { connect } from "react-redux";

const CloseIcon = styled.i`
  position: absolute;
  color: #9ba6b2;
  font-size: 24px;
  right: 0;
  top: 0;
  padding: 10px;
  &:hover {
    color: #20233f;
  }
`;

const SignIn: React.FC<SigninInterface> = ({
  email,
  error,
  token,
  loading,
  signOutUser,
  verifyAuth,
  login
}: SigninInterface) => {
  console.dir({ email, error, token, loading, signOutUser, verifyAuth, login });

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    verifyAuth();
  });

  const handleFormSubmit = (e: React.ChangeEvent<{}>) => {
   /* e.preventDefault();*/
    login(mail, password);
    !error && setOpen(false);
  };
  const handleSignOut = (e: React.ChangeEvent<{}>) => {
    e.preventDefault();
    signOutUser();
    setMail("");
    setPassword("");
  };
  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  if (loading) {
    return null;
  } else {
    return (
      <div>
        <div>Current user: {email}</div>
        {!email && <button onClick={() => setOpen(true)}>Sign in</button>}
        <button onClick={handleSignOut}>Sign out</button>
        <Dialog open={isOpen}>
          <Tabs
            onChange={handleChange}
            value={value}
            indicatorColor="primary"
            textColor="secondary"
            centered
          >
            <Tab label="SIGN IN" />
            <Tab label="SIGN UP" />
          </Tabs>
          <Form
            onSubmit={handleFormSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <DialogContent>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <TextField
                          id="outlined-basic email"
                          label="Email"
                          variant="outlined"
                          type="email"
                          name="email"
                          value={email}

                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setMail(e.currentTarget.value)
                          }
                          {...input}
                        />
                        {meta.error && meta.touched && (
                          <TextField error>{meta.error}</TextField>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                        <div>
                    <TextField
                      id="outlined-basic pass"
                      label={error ? "Password isn't correct" : "Password"}
                      variant="outlined"
                      type="password"
                      name="password"
                      value={password}

                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                      }
                      {...input}
                    />
                          {meta.error && meta.touched && (
                              <TextField error>{meta.error}</TextField>
                          )}
                        </div>
                    )}
                  </Field>
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </DialogActions>
              </form>
            )}
          />

          <CloseIcon className="fas fa-times" onClick={() => setOpen(false)} />
        </Dialog>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ login, signOutUser, verifyAuth }, dispatch);
};

const mapStateToProps = (state: InitialStateInterface) => {
  return {
    error: state.userReducer.error,
    loading: state.userReducer.loading,
    email: state.userReducer.email,
    token: state.userReducer.token
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
