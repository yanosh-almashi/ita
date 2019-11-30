import {CHANGE_PROJECT_TITLE} from './actions-constants';

const initialState = {
    projectTitle: 'ITA-tools'
}

export interface initialStateInterface {
    projectTitle: string
}
  
export const rootReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_PROJECT_TITLE: 
            return {...state, projectTitle: action.payload}
    }
    return state;
}
  
  
  
