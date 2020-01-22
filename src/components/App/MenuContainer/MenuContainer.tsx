import React from 'react';
import './MenuContainer.css';
import NavigationMenu from './NavigationMenu/NavigationMenu';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signOutUser } from "../../../store/auth/actionCreators";

const MenuContainer = ({ signOutUser }: any) => {
  return (
    <div className="menu-container">
      <div className="menu" >
        <button onClick={signOutUser}>SIGNOUT</button>
        <NavigationMenu />
      </div>
    </div>
  )
} 

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({ signOutUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(MenuContainer);