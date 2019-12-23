import React, { useContext, useState } from "react";
import { AuthContext } from "../../App";
import * as firebase from "firebase";
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  withStyles,
  Tabs, Tab,
  TextField
} from "@material-ui/core";
import styled from "styled-components";

const StyledDialog = withStyles({
  root: {
    textAlign: "center",
    position: "relative"
  }
})(Dialog);

const StyledDialogContent = withStyles({
  root: {
    paddingTop: "0px"
  }
})(DialogContent);

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

export const Form: React.FC<any> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setOpen] = useState(true);
  const [value, setValue] = useState(0);


  const Auth: any = useContext(AuthContext);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    console.dir(Auth);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) {
          Auth.setLog(true);
          setOpen(false)
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
  return (
    <StyledDialog open={isOpen}>
      <form onSubmit={handleFormSubmit}>
          <Tabs
              onChange = {handleChange}
              value = {value}
              indicatorColor="primary"
              textColor="secondary"
              centered
          >
              <Tab label="SIGN IN" />
              <Tab label="SIGN UP" />
          </Tabs>
        <StyledDialogContent>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <TextField
            id = {(error !== '') ? "standard-error-helper-text":"outlined-basic"}
            label={(error !== '') ? "Email or password isn't correct":"Password"}
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </StyledDialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
      <CloseIcon className="fas fa-times" onClick = {() => setOpen(false)} />
    </StyledDialog>
  );
};
