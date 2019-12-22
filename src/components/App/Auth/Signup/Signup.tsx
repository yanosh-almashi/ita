import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../../../store/authActions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';



const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  onSignup: (email: string, password: string) => any,
  token: string,
  id: string
}

const Signup: React.FC<Props> = ({ onSignup, token, id }) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    onSignup(email, password);
  }

  const inputEmailChange = (event: any) => {
    setEmail(event.target.value);
  }

  const inputPasswordChange = (event: any) => {
    setPassword(event.target.value);
  }

  const handleClickState = () => {
    console.log(token);
    console.log(id);
  }

  return(
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        SignUp
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickState}>
        State
      </Button>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Sign up to ITA Tools"}</DialogTitle>
        <DialogActions>
          <form onSubmit={ onSubmitForm }>
            <input onChange={ inputEmailChange } type="email" placeholder="email" value={ email }/>
            <input onChange={ inputPasswordChange } type="password" placeholder="password" value={ password }/>
            <button>signup</button>
          </form >
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    token: state.token,
    id: state.id
  }
}

const mapDispatchToProps = (dispatch: any ) => {
  return {
    onSignup: (email: string, password: string) => dispatch(authActions.authSignup(email, password))
  } 
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);