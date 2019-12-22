import * as actionsConstants from './actions-constants';
import axios from 'axios';

export const authSignup = (email: string, password: string) => {
    const signupData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    
    axios.post(actionsConstants.URL, signupData)
        .then(res => {
            console.log('---------------------------');
            console.log(res);
            console.log(res.data.idToken);
            console.log(res.data.localId);
            console.log('---------------------------');
            dispatch({
                type: actionsConstants.AUTH_SUCCESSFUL,
                payload: {
                    token: res.data.idToken,
                    id: res.data.localId
                }
            })
        })
        .catch(err => {
            console.log(err);
            return {
              type: actionsConstants.AUTH_SUCCESSFUL,
              payload: err.response.data.error
            }
        });

    return {
        type: actionsConstants.AUTH
    }
}