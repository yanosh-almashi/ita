import React from "react";
import TabButtons from "./Tabs";
import {
  AuthContainer,
  AuthSide,
  AuthForm,
  AuthSideH3,
  AuthSideTitle
} from "./auth.styled";

const Auth = () => {
  return (
    <AuthContainer>
      <AuthForm>
        <TabButtons />
      </AuthForm>
      <AuthSide>
        <div>
          <AuthSideH3>ITA Tools</AuthSideH3>
          <AuthSideTitle>Your first step</AuthSideTitle>
        </div>
      </AuthSide>
    </AuthContainer>
  );
};

export default Auth;
