
import { CHANGE_PROJECT_TITLE } from './actions-constants';

export const changeProjectTitle = (title: string) => {
    return {
        type: CHANGE_PROJECT_TITLE,
        payload: title
    }
}