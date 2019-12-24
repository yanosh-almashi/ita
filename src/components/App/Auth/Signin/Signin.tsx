import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import * as firebase from "firebase";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  Tabs,
  Tab,
  Typography,
  Box,
  TextField
} from "@material-ui/core";
import styled from "styled-components";

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

export const SignIn: React.FC<any> = () => {
  const Auth: any = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [user, setUser] = useState();

  useEffect(() =>
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Auth.setLog(true);
        setUser(user.email);
      }
    })
  );
  console.dir(user);
  console.log(Auth.isLoggedIn);
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.dir(Auth);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) {
          Auth.setLog(true);
          setOpen(false);
        }
      })
      .catch(error => {
        setError(error.message);
        console.dir(error);
        alert("Error");
      });
  };
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSignOut = (e: any) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(undefined);
        Auth.setLog(false);
      })
      .catch(error => {
        setError(error.message);
        console.dir(error);
      });
  };

  return (
    <div>
      <div>Current user: {user}</div>
      {!Auth.isLoggedIn && <button onClick={() => setOpen(true)}>Sign in</button>}
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
        <form onSubmit={handleFormSubmit}>
          <DialogContent>
            <TextField
              id="outlined-basic email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            />
            <TextField
              id="outlined-basic pass"
              label={error ? "Email or password isn't correct" : "Password"}
              variant="outlined"
              type="password"
              name="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
        <CloseIcon className="fas fa-times" onClick={() => setOpen(false)} />
      </Dialog>
    </div>
  );
};
