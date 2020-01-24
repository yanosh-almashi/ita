import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signOutUser } from '../../../store/auth/actionCreators';
import TabButtons from './Tabs';

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

const AuthPopUp = ({ signOutUser }: any) => {
  const [isOpen, setOpen] = useState(true);

  const handleSignOut = (e: React.ChangeEvent<{}>) => {
    e.preventDefault();
    signOutUser();
  };

  return (
    <Dialog open={isOpen}>
      <TabButtons />
      <CloseIcon className="fas fa-times" onClick={() => setOpen(false)} />
      <button onClick={handleSignOut} className="signOut">
        Sign out
      </button>
    </Dialog>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ signOutUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(AuthPopUp);
