
import { CHANGE_PROJECT_TITLE } from '../actionTypes/actionTypes';

export const changeProjectTitle = (title: string) => {
    return {
        type: CHANGE_PROJECT_TITLE,
        payload: title
    }
}