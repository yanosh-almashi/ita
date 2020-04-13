import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import SignIn from "./Signin/Signin";
import Signup from "./Signup/Signup";
import styled from "styled-components";

const AuthFormContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const TabButtons = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <AuthFormContainer>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="SIGN IN" {...a11yProps(0)} />
          <Tab label="SIGN UP" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </AuthFormContainer>
  );
};

export default TabButtons;
