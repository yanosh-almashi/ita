import React from 'react';
import { authSignout } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

const Auth = (props: any) => {
  const authSignoutHandler = () => {
    firebase.auth().signOut();
    props.authSignout();
  }

  let signout = null;

  if(props.isAuth) {
    signout = (
      <div>
        <div>
          Email: 
          <p>{ firebase.auth().currentUser?.email }</p>
        </div>
        <button onClick={ authSignoutHandler }>Signout</button>
      </div>
    )
  }

  return (
    <div>
        Auth
        <hr/>
        { signout }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.isAuth,
    token: state.token,
    id: state.id
  }
}

export default connect(mapStateToProps, { authSignout })(Auth);