import * as actionConstants from '../store/actions-constants';

const initialState = {
  token: null,
  id: null,
  error: null
}

const authReducer = (state = initialState, action: any) => {
  console.log('auth reducer');
  switch (action.type) {
    case actionConstants.AUTH:
      return {
        ...state,
        error: null
      }
    case actionConstants.AUTH_SUCCESSFUL:
      return {
        ...state,
        token: action.payload.token,
        id: action.payload.id
      }
    case actionConstants.AUTH_ERROR:
        return {
          ...state,
          error: action.payload
        }
    default: return state;
  }

}

export default authReducer;