import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Tabs,
  Tab
} from "@material-ui/core";
import styled from "styled-components";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
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

const AuthPopUp = (props: any) => {
  const [isOpen, setOpen] = useState(true);
  const [value, setValue] = useState(0);
  


  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
return(
  <div>
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
      <DialogContent>
      <Signup />
      <Signin />
    </DialogContent>
    <CloseIcon className="fas fa-times" onClick={() => setOpen(false)} />
    </Dialog>
  </div>
)}

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.token,
    uid: state.authReducer.uid,
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps)(AuthPopUp);

            